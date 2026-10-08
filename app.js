(function () {
  var S = window.SITE;
  var P = S.profile || {};
  var main = document.getElementById('main');
  var side = document.getElementById('side');
  var player = document.getElementById('player');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function hue(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
  }
  // Colour block with the initial; if the item has an image, it sits on top
  // (and quietly disappears if the file is missing).
  function cover(o) {
    var h = hue(o.title);
    var out = '<span class="ph" style="background:linear-gradient(135deg,hsl(' + h + ',55%,40%),hsl(' + ((h + 40) % 360) + ',60%,22%))">' + esc(o.title.charAt(0).toUpperCase()) + '</span>';
    if (o.image) out += '<img src="' + esc(o.image) + '" alt="" onerror="this.remove()">';
    return out;
  }
  function mins(html) {
    var words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 220)) + ' min';
  }
  function href() { return '#/' + Array.prototype.slice.call(arguments).join('/'); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  function me() { return { title: S.name, image: P.photo }; }

  // A song with a "url" opens that link (in a new tab) instead of a page on this site.
  function songLink(f, p, s) {
    return s.url ? { href: s.url, ext: true } : { href: href(f.id, p.id, s.id), ext: false };
  }
  function aOpen(l, cls, label) {
    return '<a' + (cls ? ' class="' + cls + '"' : '') + ' href="' + esc(l.href) + '"' +
      (l.ext ? ' target="_blank" rel="noopener"' : '') + (label ? ' aria-label="' + label + '"' : '') + '>';
  }
  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return 'the original site'; }
  }
  // The little label on the right of a tracklist row.
  function timeLabel(s) {
    if (s.time) return s.time;
    if (s.body) return mins(s.body);
    return s.url ? '↗' : mins('');
  }
  function lookup(path) {
    var parts = path.split('/').filter(Boolean);
    var f = S.folders.filter(function (x) { return x.id === parts[0]; })[0];
    var p = f && f.playlists.filter(function (x) { return x.id === parts[1]; })[0];
    var s = p && p.songs.filter(function (x) { return x.id === parts[2]; })[0];
    return { f: f, p: p, s: s };
  }

  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var f = S.folders.filter(function (x) { return x.id === parts[0]; })[0];
    var p = f && f.playlists.filter(function (x) { return x.id === parts[1]; })[0];
    var s = p && p.songs.filter(function (x) { return x.id === parts[2]; })[0];
    return { f: f, p: p, s: s };
  }

  function card(f, p, sub) {
    var line = sub !== undefined ? sub : (p.blurb || '');
    return '<a class="card" href="' + href(f.id, p.id) + '">' +
      '<div class="cover">' + cover(p) + '</div>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(line) + '</p>' +
      '<span class="play">&#9654;</span></a>';
  }

  // ---- Profile (home) ----
  function profileView() {
    var pls = 0, songs = 0;
    S.folders.forEach(function (f) {
      pls += f.playlists.length;
      f.playlists.forEach(function (p) { songs += p.songs.length; });
    });
    var stats = [
      plural(S.folders.length, 'Folder', 'Folders'),
      plural(pls, 'Public Playlist', 'Public Playlists'),
      plural(songs, 'Song', 'Songs')
    ].join(' &middot; ');

    var out = '<div class="hero"><div class="cover avatar">' + cover(me()) + '</div><div>' +
      '<div class="type">Profile</div><h1>' + esc(S.name) + '</h1>' +
      (P.tagline ? '<p>' + esc(P.tagline) + '</p>' : '') +
      '<div class="stats">' + stats + '</div></div></div>';

    if (P.links && P.links.length) {
      out += '<div class="actions links">';
      P.links.forEach(function (l) {
        out += '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
      });
      out += '</div>';
    }

    if (P.worked && P.worked.length) {
      out += '<h2 class="section-title">' + esc(P.workedTitle || 'Worked with') + '</h2>';
      if (P.workedNote) out += '<div class="section-sub">' + esc(P.workedNote) + '</div>';
      out += '<div class="grid">';
      P.worked.forEach(function (w) {
        var to = w.to ? '#/' + w.to : (w.url || '#/');
        var ext = !!(w.url && !w.to);
        var hit = w.to ? lookup(w.to) : null;
        if (hit && hit.s && hit.s.url) { to = hit.s.url; ext = true; }
        out += '<a class="card round" href="' + esc(to) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' +
          '<div class="cover">' + cover(w) + '</div><h3>' + esc(w.title) + '</h3><p>' + esc(w.type || '') + '</p></a>';
      });
      out += '</div>';
    }

    out += '<h2 class="section-title">Public Playlists</h2><div class="grid">';
    S.folders.forEach(function (f) {
      f.playlists.forEach(function (p) { out += card(f, p, 'In ' + f.title); });
    });
    return out + '</div>';
  }

  function heroHtml(o, type, stats, play) {
    return '<div class="hero"><div class="cover">' + cover(o) + '</div><div>' +
      '<div class="type">' + type + '</div><h1>' + esc(o.title) + '</h1>' +
      '<p>' + esc(o.blurb || '') + '</p><div class="stats">' + esc(S.name) + ' &middot; ' + stats + '</div></div></div>' +
      (play ? '<div class="actions">' + aOpen(play, 'big-play', 'Start reading') + '&#9654;</a></div>' : '');
  }

  function folderView(r) {
    var f = r.f;
    var first = f.playlists[0] && f.playlists[0].songs[0];
    var playHref = first ? songLink(f, f.playlists[0], first) : null;
    var out = heroHtml(f, 'Folder', plural(f.playlists.length, 'playlist', 'playlists'), playHref);
    out += '<div class="grid">';
    f.playlists.forEach(function (p) { out += card(f, p); });
    return out + '</div>';
  }

  function playlistView(r) {
    var f = r.f, p = r.p;
    var playHref = p.songs[0] ? songLink(f, p, p.songs[0]) : null;
    var out = heroHtml(p, 'Playlist', plural(p.songs.length, 'song', 'songs'), playHref);
    out += '<div class="tracks"><div class="track-head"><span>#</span><span>Title</span><span class="d">Date</span><span>Link</span></div>';
    p.songs.forEach(function (s, i) {
      out += aOpen(songLink(f, p, s), 'track') + '<span class="n">' + (i + 1) + '</span>' +
        '<span class="t"><strong>' + esc(s.title) + '</strong><span>' + esc(s.blurb || '') + '</span></span>' +
        '<span class="d">' + esc(s.date || '') + '</span><span class="len">' + esc(timeLabel(s)) + '</span></a>';
    });
    return out + '</div>';
  }

  function siblings(r) {
    var list = r.p.songs;
    var i = list.indexOf(r.s);
    return { prev: list[i - 1], next: list[i + 1] };
  }

  function songView(r) {
    var f = r.f, p = r.p, s = r.s, sib = siblings(r);
    var meta = [s.blurb, s.date, (s.body || s.time) ? (s.time || mins(s.body)) + ' read' : ''].filter(Boolean).map(esc).join(' &middot; ');
    return '<article class="reading"><div class="crumbs"><a href="' + href(f.id) + '">' + esc(f.title) + '</a> / <a href="' + href(f.id, p.id) + '">' + esc(p.title) + '</a></div>' +
      '<h1>' + esc(s.title) + '</h1><div class="byline">' + meta + '</div>' +
      '<div class="content">' + (s.body || '') + '</div>' +
      (s.url ? '<p class="extlink"><a class="btn-link" href="' + esc(s.url) + '" target="_blank" rel="noopener">Read it on ' + esc(hostOf(s.url)) + ' &#8599;</a></p>' : '') +
      '<div class="pager"><span>' +
      (sib.prev ? aOpen(songLink(f, p, sib.prev)) + '&larr; ' + esc(sib.prev.title) + '</a>' : '') + '</span><span>' +
      (sib.next ? aOpen(songLink(f, p, sib.next)) + esc(sib.next.title) + ' &rarr;</a>' : '') + '</span></div></article>';
  }

  function renderSide(r) {
    var out = '<h2><a href="#/">' + esc(S.name) + '</a><span>Your Library</span></h2>';
    S.folders.forEach(function (f) {
      var open = r.f === f;
      out += '<div class="lib-folder"><a class="lib-item' + (open && !r.p ? ' current' : '') + '" href="' + href(f.id) + '">' +
        '<span class="thumb">' + cover(f) + '</span><span class="meta"><strong>' + esc(f.title) + '</strong><small>Folder &middot; ' + plural(f.playlists.length, 'playlist', 'playlists') + '</small></span></a>';
      if (open && f.playlists.length) {
        out += '<div class="lib-sub">';
        f.playlists.forEach(function (p) {
          out += '<a class="lib-item' + (r.p === p ? ' current' : '') + '" href="' + href(f.id, p.id) + '">' +
            '<span class="thumb">' + cover(p) + '</span><span class="meta"><strong>' + esc(p.title) + '</strong><small>Playlist</small></span></a>';
        });
        out += '</div>';
      }
      out += '</div>';
    });
    side.innerHTML = out;
  }

  function renderPlayer(r) {
    var cur = r.s || r.p || r.f;
    var title = cur ? cur.title : S.name;
    var thumb = cover(cur || me());
    var label = cur ? 'Now reading' : 'Profile';
    var prev = '<span class="skip">&#9664;&#9664;</span>', next = '<span class="skip">&#9654;&#9654;</span>';
    if (r.s) {
      var sib = siblings(r);
      if (sib.prev) prev = aOpen(songLink(r.f, r.p, sib.prev), 'skip', 'Previous') + '&#9664;&#9664;</a>';
      if (sib.next) next = aOpen(songLink(r.f, r.p, sib.next), 'skip', 'Next') + '&#9654;&#9654;</a>';
    }
    var right = r.s && (r.s.body || r.s.time) ? (r.s.time || mins(r.s.body)) + ' read' : '';
    player.innerHTML = '<div class="np"><div class="thumb">' + thumb + '</div><div><strong>' + esc(title) + '</strong><small>' + label + '</small></div></div>' +
      '<div class="ctrl"><div class="row">' + prev + '<button class="btn" id="musicbtn" type="button">&#9654;</button>' + next + '</div><div class="bar"><i id="progress"></i></div></div>' +
      '<div class="right">' + right + '</div>';
    syncMusic();
  }

  function updateProgress() {
    var bar = document.getElementById('progress');
    if (!bar) return;
    var mobile = window.innerWidth <= 800;
    var top = mobile ? window.scrollY : main.scrollTop;
    var max = mobile ? document.documentElement.scrollHeight - window.innerHeight : main.scrollHeight - main.clientHeight;
    bar.style.width = (max > 0 ? Math.min(100, (top / max) * 100) : 0) + '%';
  }

  function render() {
    var r = route();
    var cur = r.s || r.p || r.f;
    main.style.setProperty('--hue', cur ? hue(cur.title) : (typeof P.hue === 'number' ? P.hue : hue(S.name)));
    main.innerHTML = r.s ? songView(r) : r.p ? playlistView(r) : r.f ? folderView(r) : profileView();
    main.scrollTop = 0;
    window.scrollTo(0, 0);
    renderSide(r);
    renderPlayer(r);
    updateProgress();
    document.title = (cur ? cur.title + ' · ' : '') + S.name;
  }

  // ---- Search ----
  var qEl = document.getElementById('q');
  var resEl = document.getElementById('results');
  var searchBox = document.getElementById('search');
  var index = [];
  var results = [];
  var terms = [];
  var active = 0;

  function plain(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
      .replace(/\s+/g, ' ').trim();
  }

  S.folders.forEach(function (f) {
    index.push({ type: 'Folder', title: f.title, blurb: f.blurb || '', body: '', path: '', to: href(f.id) });
    f.playlists.forEach(function (p) {
      index.push({ type: 'Playlist', title: p.title, blurb: p.blurb || '', body: '', path: f.title, to: href(f.id, p.id) });
      p.songs.forEach(function (s) {
        index.push({ type: 'Song', title: s.title, blurb: s.blurb || '', body: plain(s.body || ''), path: f.title + ' › ' + p.title, to: songLink(f, p, s).href, ext: !!s.url });
      });
    });
  });

  function runSearch() {
    var found = [];
    index.forEach(function (it) {
      var t = it.title.toLowerCase(), b = it.blurb.toLowerCase(), x = it.body.toLowerCase(), pa = it.path.toLowerCase();
      var score = 0, ok = true;
      terms.forEach(function (w) {
        var s = 0;
        if (t.indexOf(w) > -1) s += 3;
        if (b.indexOf(w) > -1) s += 2;
        if (pa.indexOf(w) > -1) s += 1;
        if (x.indexOf(w) > -1) s += 1;
        if (!s) ok = false;
        score += s;
      });
      if (ok) found.push({ it: it, score: score });
    });
    found.sort(function (a, b) { return b.score - a.score; });
    return found.slice(0, 8);
  }

  function snippet(it) {
    var low = it.body.toLowerCase(), best = -1, len = 0;
    terms.forEach(function (w) {
      var i = low.indexOf(w);
      if (i > -1 && (best === -1 || i < best)) { best = i; len = w.length; }
    });
    if (best === -1) return '';
    var a = Math.max(0, best - 40), b = Math.min(it.body.length, best + len + 80);
    return (a > 0 ? '…' : '') + esc(it.body.slice(a, best)) + '<mark>' + esc(it.body.slice(best, best + len)) + '</mark>' +
      esc(it.body.slice(best + len, b)) + (b < it.body.length ? '…' : '');
  }

  function renderResults() {
    var out = '';
    if (!results.length) {
      out = '<div class="noresult">No results for “' + esc(qEl.value.trim()) + '”</div>';
    } else {
      results.forEach(function (r, i) {
        var it = r.it;
        var inHead = terms.some(function (w) { return (it.title + ' ' + it.blurb).toLowerCase().indexOf(w) > -1; });
        var sn = inHead ? '' : snippet(it);
        var sub = it.path || it.blurb;
        out += '<a class="result' + (i === active ? ' active' : '') + '" href="' + esc(it.to) + '"' + (it.ext ? ' target="_blank" rel="noopener"' : '') + '><span class="rtype">' + it.type + '</span>' +
          '<span class="rmain"><strong>' + esc(it.title) + '</strong>' + (sub ? '<small>' + esc(sub) + '</small>' : '') +
          (sn ? '<small>' + sn + '</small>' : '') + '</span></a>';
      });
    }
    resEl.innerHTML = out;
    resEl.classList.add('open');
  }

  function closeResults() { resEl.classList.remove('open'); }

  function updateSearch() {
    var q = qEl.value.trim();
    if (!q) { results = []; closeResults(); return; }
    terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    results = runSearch();
    if (active >= results.length) active = 0;
    renderResults();
  }

  function goTo(r) {
    if (r.it.ext) window.open(r.it.to, '_blank', 'noopener');
    else location.hash = r.it.to;
    qEl.value = '';
    results = [];
    closeResults();
    qEl.blur();
  }

  qEl.addEventListener('input', function () { active = 0; updateSearch(); });
  qEl.addEventListener('focus', updateSearch);
  qEl.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' && results.length) {
      e.preventDefault(); active = (active + 1) % results.length; renderResults();
    } else if (e.key === 'ArrowUp' && results.length) {
      e.preventDefault(); active = (active - 1 + results.length) % results.length; renderResults();
    } else if (e.key === 'Enter') {
      if (results[active]) { e.preventDefault(); goTo(results[active]); }
    } else if (e.key === 'Escape') {
      qEl.value = ''; results = []; closeResults(); qEl.blur();
    }
  });
  resEl.addEventListener('click', function () { qEl.value = ''; results = []; closeResults(); });
  document.addEventListener('click', function (e) {
    if (!searchBox.contains(e.target)) closeResults();
  });
  document.addEventListener('keydown', function (e) {
    var tag = e.target && e.target.tagName;
    if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') { e.preventDefault(); qEl.focus(); }
  });

  // ---- Dark / light toggle ----
  var root = document.documentElement;
  var tgl = document.getElementById('theme');
  function syncToggle() {
    var label = root.getAttribute('data-theme') === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    tgl.setAttribute('aria-label', label);
    tgl.title = label;
  }
  tgl.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncToggle();
  });
  syncToggle();

  // ---- Collapsible sidebar ----
  var menuBtn = document.getElementById('menu');
  function syncMenu() {
    var collapsed = root.getAttribute('data-sidebar') === 'collapsed';
    var label = collapsed ? 'Show library' : 'Hide library';
    menuBtn.setAttribute('aria-label', label);
    menuBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    menuBtn.title = label;
  }
  menuBtn.addEventListener('click', function () {
    var collapsed = root.getAttribute('data-sidebar') === 'collapsed';
    if (collapsed) root.removeAttribute('data-sidebar');
    else root.setAttribute('data-sidebar', 'collapsed');
    try { localStorage.setItem('sidebar', collapsed ? 'open' : 'collapsed'); } catch (e) {}
    syncMenu();
  });
  syncMenu();

  // ---- Music: the play button in the bottom bar ----
  // Uses Spotify's official embedded player, which is only loaded the first time
  // someone clicks play. Change the song with a "music" block in content.js.
  var M = S.music || { uri: 'spotify:track:60WGJKqscT0bya3hPeQdYv', title: 'Try As I May', artist: 'Cameron Winter' };
  var musicCtl = null, musicLoading = false, musicPlaying = false;

  function musicLabel() {
    return (musicPlaying ? 'Pause ' : 'Play ') + M.title + ' by ' + M.artist;
  }
  function syncMusic() {
    var b = document.getElementById('musicbtn');
    if (!b) return;
    b.innerHTML = musicPlaying ? '&#10074;&#10074;' : '&#9654;';
    b.setAttribute('aria-label', musicLabel());
    b.title = musicLabel();
  }
  function spotifyUrl() { return 'https://open.spotify.com/track/' + M.uri.split(':').pop(); }

  function startMusic() {
    if (musicLoading) return;
    musicLoading = true;
    var box = document.createElement('div');
    box.className = 'music';
    box.innerHTML = '<div id="music-embed"></div>';
    document.body.appendChild(box);
    player.classList.add('has-music');

    window.onSpotifyIframeApiReady = function (api) {
      api.createController(document.getElementById('music-embed'), { uri: M.uri, width: '100%', height: 80 }, function (ctl) {
        musicCtl = ctl;
        ctl.addListener('ready', function () { ctl.play(); });
        ctl.addListener('playback_update', function (e) {
          musicPlaying = !e.data.isPaused;
          syncMusic();
        });
      });
    };
    var sc = document.createElement('script');
    sc.src = 'https://open.spotify.com/embed/iframe-api/v1';
    sc.async = true;
    sc.onerror = function () {
      box.innerHTML = '<a class="music-fallback" href="' + esc(spotifyUrl()) + '" target="_blank" rel="noopener">Couldn’t load the player. Open “' + esc(M.title) + '” on Spotify</a>';
      musicLoading = false;
    };
    document.body.appendChild(sc);
  }

  player.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('#musicbtn') : null;
    if (!b) return;
    if (musicCtl) musicCtl.togglePlay();
    else startMusic();
  });

  main.addEventListener('scroll', updateProgress);
  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);
  window.addEventListener('hashchange', render);
  render();
})();
