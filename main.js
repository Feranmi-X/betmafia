     const SUPABASE_URL = "https://lckduzbmwgyfkrohakyx.supabase.co";
      const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxja2R1emJtd2d5Zmtyb2hha3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0OTI4NzgsImV4cCI6MjA5ODA2ODg3OH0.6uMIVXbx-fgDq-t0yiRQDM_7lesJWj2dFrDubM3H2Rw";
      const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      // ──────────────────────────────────────────────
      // ADMIN ACCESS LIST
      // ──────────────────────────────────────────────
      // Add the email address(es) of accounts that should see the
      // admin badge in the navbar and be able to jump to the admin panel.
      // Keep this list in sync with ALLOWED_ADMIN_EMAILS in admin.html.
      var ADMIN_EMAILS = ["admin@betmafia.vip"];

      function isAdminEmail(email) {
        if (!email) return false;
        return ADMIN_EMAILS.map((e) => e.toLowerCase()).includes(
          email.toLowerCase(),
        );
      }

      function goToAdminPanel() {
        window.open("admin.html", "_blank");
      }

      var PLANS = [
        {
          name: "5-Day Trial",
          price: 80,
          duration: "5 Days Access",
          featured: false,
          feats: [
            "Daily VIP picks (all sports)",
            "Injury & lineup intel",
            "Private Discord access",
            "Same-day release",
          ],
        },
        {
          name: "Weekly",
          price: 150,
          duration: "7 Days Access",
          featured: false,
          feats: [
            "Daily VIP picks (all sports)",
            "Injury & lineup intel",
            "Private Discord access",
            "Same-day release",
            "Parlay of the week",
          ],
        },
        {
          name: "Monthly",
          price: 300,
          duration: "30 Days Access",
          featured: true,
          feats: [
            "Daily VIP picks (all sports)",
            "Injury & lineup intel",
            "Private Discord access",
            "Same-day release",
            "Parlay of the week",
            "1-on-1 capper consult",
            "Exclusive monthly locks",
          ],
        },
        {
          name: "Lifetime",
          price: 1000,
          duration: "Forever Access",
          featured: false,
          feats: [
            "Everything in Monthly",
            "Lifetime VIP status",
            "First pick every day",
            "Direct capper hotline",
            "All future upgrades free",
            "Founding member badge",
          ],
        },
      ];
      var SBOOKS = [
        { name: "FanDuel", icon: "🎯", rate: 91 },
        { name: "DraftKings", icon: "👑", rate: 89 },
        { name: "BetMGM", icon: "🎰", rate: 87 },
        { name: "PrizePicks", icon: "🏆", rate: 93 },
        { name: "Underdog", icon: "🐶", rate: 88 },
        { name: "BetWay", icon: "⚡", rate: 85 },
        { name: "Bet365", icon: "🌐", rate: 86 },
        { name: "Bovada", icon: "🐂", rate: 84 },
        { name: "PointsBet", icon: "📍", rate: 83 },
        { name: "Others", icon: "📊", rate: 82 },
      ];
      var TESTIS = [
        {
          initials: "MJ",
          name: "Marcus J.",
          tag: "Monthly · Atlanta, GA",
          win: "+$2,400 this month",
          stars: 5,
          text: "Bet Mafia changed my whole perspective on sports betting. Three weeks into the monthly plan and I've already made back my subscription fee 8 times over. These guys are on another level.",
        },
        {
          initials: "TR",
          name: "Tony R.",
          tag: "Lifetime · Miami, FL",
          win: "7/9 on FanDuel locks",
          stars: 5,
          text: "Hit 7 of the last 9 locks they posted on FanDuel. The intel these guys drop on injuries alone is worth the price. My sportsbook account is up $4K since I joined. 10/10.",
        },
        {
          initials: "DS",
          name: "Darius S.",
          tag: "Lifetime · Chicago, IL",
          win: "Upgraded after day 3",
          stars: 5,
          text: "Started with the 5-day trial just to test it. Ended up going straight to lifetime after day 3. The Discord server is super active, real professionals dropping knowledge all day.",
        },
        {
          initials: "KW",
          name: "Kevin W.",
          tag: "Monthly · Houston, TX",
          win: "3x 4-pick power play",
          stars: 5,
          text: "The PrizePicks props they send daily are insane. Hit a 4-pick power play three times this month. Wifey asked where the money was coming from. Bet Mafia is my silent income stream.",
        },
        {
          initials: "AV",
          name: "Aaliyah V.",
          tag: "Monthly · Las Vegas, NV",
          win: "14/18 first month",
          stars: 5,
          text: "As a woman in betting I was skeptical. But they treat everyone the same and the picks are just facts. 14 out of 18 picks my first month on DraftKings. Renewed immediately.",
        },
        {
          initials: "RB",
          name: "Rico B.",
          tag: "Lifetime · New York, NY",
          win: "Full-time bettor",
          stars: 5,
          text: "I do this full time now. The sharp line moves they track on BetMGM before the public even knows — that's where the real edge is. Recommended to 3 of my boys, all monthly members now.",
        },
      ];
      var WIN_NOTIFS = [
        {
          name: "Garia M.",
          amount: "$600",
          book: "FanDuel",
          sport: "🏀 NBA Props",
          time: "2m ago",
        },
        {
          name: "DeShawn T.",
          amount: "$1,240",
          book: "PrizePicks",
          sport: "🏈 NFL Parlay",
          time: "5m ago",
        },
        {
          name: "Keisha R.",
          amount: "$380",
          book: "DraftKings",
          sport: "⚾ MLB Run Line",
          time: "8m ago",
        },
        {
          name: "Marcus L.",
          amount: "$750",
          book: "Underdog Fantasy",
          sport: "🏀 NBA Power Play",
          time: "11m ago",
        },
        {
          name: "Tyrone B.",
          amount: "$2,100",
          book: "FanDuel",
          sport: "🥊 UFC Main Event",
          time: "14m ago",
        },
        {
          name: "Aaliyah F.",
          amount: "$490",
          book: "BetMGM",
          sport: "🏀 NBA Spread",
          time: "17m ago",
        },
        {
          name: "Carlos M.",
          amount: "$870",
          book: "Bet365",
          sport: "⚽ Soccer Parlay",
          time: "20m ago",
        },
        {
          name: "Jordan K.",
          amount: "$1,500",
          book: "DraftKings",
          sport: "🏈 NFL Sunday Lock",
          time: "23m ago",
        },
        {
          name: "Brianna T.",
          amount: "$310",
          book: "PrizePicks",
          sport: "🎓 NCAAB Props",
          time: "26m ago",
        },
        {
          name: "Raheem A.",
          amount: "$960",
          book: "Caesars",
          sport: "🏒 NHL Total",
          time: "29m ago",
        },
      ];

      // ──────────────────────────────────────────────
      // PAYMENT METHODS — now admin-editable via Supabase
      // ──────────────────────────────────────────────
      var FALLBACK_PAY_METHODS = [
        {
          id: "zelle",
          icon: "💚",
          name: "Zelle",
          info: 'Send to: <span class="text-gold font-semibold">betmafia@zelle.com</span><br>Name: Bet Mafia VIP<br>Note: Your name + plan',
        },
        {
          id: "chime",
          icon: "💛",
          name: "Chime",
          info: 'Send to: <span class="text-gold font-semibold">$BetMafiaVIP</span><br>Include your email in the memo field',
        },
        {
          id: "apple",
          icon: "🍎",
          name: "Apple Pay",
          info: 'Send to: <span class="text-gold font-semibold">+1 (702) 555-0198</span><br>Name: Bet Mafia Admin<br>Note: VIP Plan + your email',
        },
        {
          id: "bitcoin",
          icon: "₿",
          name: "Bitcoin",
          info: 'BTC: <span class="text-gold font-semibold break-all">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</span><br>Include email in note if wallet allows.',
        },
        {
          id: "cashapp",
          icon: "💵",
          name: "Cash App",
          info: 'Cashtag: <span class="text-gold font-semibold">$BetMafiaVIP</span><br>Include your name and plan in the note',
        },
        {
          id: "paypal",
          icon: "🔵",
          name: "PayPal",
          info: 'Send to: <span class="text-gold font-semibold">payments@betmafia.vip</span><br>Friends &amp; Family ONLY',
        },
      ];

      var PAY_METHODS = [];

      async function loadPayMethods() {
        var { data, error } = await sb
          .from("pay_methods")
          .select("*")
          .order("sort_order");

        if (error || !data || !data.length) {
          console.warn(
            "pay_methods fetch failed or empty, using fallback:",
            error && error.message,
          );
          PAY_METHODS = FALLBACK_PAY_METHODS;
        } else {
          PAY_METHODS = data.map(function (m) {
            return { id: m.id, icon: m.icon, name: m.name, info: m.info };
          });
        }
        buildPayMethods();
      }

      var SPORTS = [
        {
          id: "nba",
          label: "NBA",
          icon: "🏀",
          name: "NBA Basketball",
          tag: "Daily Picks · All Season Long",
          desc: "The NBA is our bread and butter. Our cappers track every rotation change, rest-day pattern, back-to-back fatigue, and line movement in real time.",
          stats: [
            { v: "93%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "30", l: "Teams" },
            { v: "4", l: "Bet Types" },
          ],
        },
        {
          id: "nfl",
          label: "NFL",
          icon: "🏈",
          name: "NFL Football",
          tag: "Biggest Betting Market in the World",
          desc: "Every injury report, coaching tendency, weather condition, and divisional matchup — dissected from Thursday Night through Monday Night.",
          stats: [
            { v: "89%", l: "Win Rate" },
            { v: "Weekly", l: "Picks" },
            { v: "32", l: "Teams" },
            { v: "18", l: "Weeks" },
          ],
        },
        {
          id: "mlb",
          label: "MLB",
          icon: "⚾",
          name: "MLB Baseball",
          tag: "162-Game Season. Endless Edges.",
          desc: "With 162 games per team the slate is packed with value every night. We focus on starting pitcher matchups, bullpen depth, park factors, platoon splits, and umpire tendencies.",
          stats: [
            { v: "87%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "30", l: "Teams" },
            { v: "162", l: "Games/Season" },
          ],
        },
        {
          id: "nhl",
          label: "NHL",
          icon: "🏒",
          name: "NHL Hockey",
          tag: "Underrated Market. Massive Value.",
          desc: "One of the most undervalued markets in sports. Goalie matchups, power play percentages, travel schedules, and home ice — our cappers have been exploiting NHL edges for years.",
          stats: [
            { v: "85%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "32", l: "Teams" },
            { v: "82", l: "Games/Season" },
          ],
        },
        {
          id: "ufc",
          label: "UFC / MMA",
          icon: "🥊",
          name: "UFC & MMA",
          tag: "Fight Night Intelligence",
          desc: "MMA is the most volatile — and most profitable — sport when you have the right intel. Our analysts study striking stats, grappling efficiency, cardio rates, and training camp reports.",
          stats: [
            { v: "82%", l: "Win Rate" },
            { v: "Per Event", l: "Picks" },
            { v: "All", l: "Promotions" },
            { v: "Full", l: "Card Coverage" },
          ],
        },
        {
          id: "nba-props",
          label: "PrizePicks",
          icon: "🏆",
          name: "PrizePicks Props",
          tag: "Power Plays · Flex · Daily Value",
          desc: "Our highest win-rate product. Daily 4-pick Power Plays and Flex entries with confidence ratings.",
          stats: [
            { v: "93%", l: "Win Rate" },
            { v: "Daily", l: "Entries" },
            { v: "4-Pick", l: "Power Plays" },
            { v: "All", l: "Sports" },
          ],
        },
        {
          id: "ncaab",
          label: "College B-Ball",
          icon: "🎓",
          name: "College Basketball (NCAAB)",
          tag: "March Madness Year-Round Edge",
          desc: "Some of the softest lines in all of sports betting. We monitor coaching tendencies, recruiting momentum, home court energy, and post-conference tournament form.",
          stats: [
            { v: "86%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "350+", l: "Teams" },
            { v: "March", l: "Madness" },
          ],
        },
        {
          id: "ncaaf",
          label: "College FB",
          icon: "🏟️",
          name: "College Football (NCAAF)",
          tag: "Saturday is Payday",
          desc: "130+ FBS teams, massive point spreads, and market inefficiencies every Saturday.",
          stats: [
            { v: "84%", l: "Win Rate" },
            { v: "Weekly", l: "Picks" },
            { v: "130+", l: "Teams" },
            { v: "Bowls", l: "Covered" },
          ],
        },
        {
          id: "soccer",
          label: "Soccer",
          icon: "⚽",
          name: "Soccer (MLS & International)",
          tag: "The Beautiful Game. Beautiful Returns.",
          desc: "From the Premier League to Champions League to MLS. We focus on team form, xG data, manager rotations, and fatigue.",
          stats: [
            { v: "83%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "10+", l: "Leagues" },
            { v: "All", l: "Markets" },
          ],
        },
        {
          id: "tennis",
          label: "Tennis",
          icon: "🎾",
          name: "Tennis",
          tag: "Aces, Upsets & Massive Value",
          desc: "Head-to-head matchups, surface preferences, player fitness, and serve efficiency create enormous daily edges.",
          stats: [
            { v: "80%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "4", l: "Grand Slams" },
            { v: "ATP & WTA", l: "Covered" },
          ],
        },
        {
          id: "golf",
          label: "Golf",
          icon: "⛳",
          name: "Golf / PGA Tour",
          tag: "Outright Winners & Top-10 Value",
          desc: "Course history, strokes gained metrics, driving accuracy setups, and player form over the last 10 rounds.",
          stats: [
            { v: "78%", l: "Win Rate" },
            { v: "Weekly", l: "Picks" },
            { v: "PGA & DP", l: "Tours" },
            { v: "Outrights", l: "& H2H" },
          ],
        },
        {
          id: "esports",
          label: "Esports",
          icon: "🎮",
          name: "Esports",
          tag: "The Fastest-Growing Betting Market",
          desc: "CS2, League of Legends, Valorant, and Dota 2 at the highest competitive levels.",
          stats: [
            { v: "81%", l: "Win Rate" },
            { v: "Daily", l: "Picks" },
            { v: "4+", l: "Titles" },
            { v: "Global", l: "Tournaments" },
          ],
        },
      ];

      // ── State ──
      var currentUser = null,
        selectedPayMethod = "",
        activeSportId = null;

      // ── PIN State ──
      var pinValue = "";
      var CORRECT_PIN = "5432";
      var wdPayload = {};

      // ── Toast ──
      var toastTimer;
      function showToast(msg) {
        var t = document.getElementById("toast");
        t.textContent = msg;
        t.classList.remove(
          "opacity-0",
          "translate-y-16",
          "pointer-events-none",
        );
        t.classList.add("opacity-100", "translate-y-0");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
          t.classList.remove("opacity-100", "translate-y-0");
          t.classList.add("opacity-0", "translate-y-16", "pointer-events-none");
        }, 3200);
      }

      // ── Win popup ──
      var winIdx = 0,
        winActive = false;
      function showNextWin() {
        if (winActive) return;
        var notif = WIN_NOTIFS[winIdx % WIN_NOTIFS.length];
        winIdx++;
        winActive = true;
        var c = document.getElementById("win-popup");
        c.innerHTML =
          '<div class="testi-popup bg-dark-card border border-gold/40 rounded-xl shadow-2xl p-4 flex items-start gap-3" style="box-shadow:0 8px 32px rgba(212,175,55,.15)"><div class="text-2xl flex-shrink-0 mt-0.5">' +
          notif.sport.split(" ")[0] +
          '</div><div class="flex-1 min-w-0"><div class="flex items-center justify-between gap-2 mb-1"><span class="font-semibold text-[13px] text-gray-100 truncate">' +
          notif.name +
          '</span><span class="text-10 text-gray-500 flex-shrink-0">' +
          notif.time +
          '</span></div><div class="text-11 text-gray-400 mb-1.5">' +
          notif.sport +
          " · " +
          notif.book +
          '</div><div class="inline-flex items-center gap-1.5 bg-green-900/30 border border-green-700/40 text-green-400 text-11 font-bold px-2.5 py-1 rounded-sm">💰 Won ' +
          notif.amount +
          '</div></div><button onclick="dismissWinPopup()" class="text-gray-600 hover:text-gray-300 text-base leading-none bg-transparent border-none cursor-pointer flex-shrink-0 mt-0.5">✕</button></div>';
        c.classList.remove("hidden");
        setTimeout(dismissWinPopup, 5000);
      }
      function dismissWinPopup() {
        var c = document.getElementById("win-popup");
        var inner = c.querySelector(".testi-popup");
        if (!inner) {
          winActive = false;
          return;
        }
        inner.classList.add("hiding");
        setTimeout(function () {
          c.classList.add("hidden");
          c.innerHTML = "";
          winActive = false;
        }, 380);
      }
      function startWinPopups() {
        setTimeout(function loop() {
          showNextWin();
          setTimeout(loop, 8000);
        }, 3000);
      }

      // ── Theme ──
      function applyTheme(t) {
        document.documentElement.classList.toggle("dark", t === "dark");
        document.documentElement.classList.toggle("light", t === "light");
        localStorage.setItem("bm_theme", t);
        document
          .getElementById("icon-moon")
          .classList.toggle("bg-gold", t === "dark");
        document
          .getElementById("icon-sun")
          .classList.toggle("bg-gold", t === "light");
      }
      function toggleTheme() {
        applyTheme(
          document.documentElement.classList.contains("dark")
            ? "light"
            : "dark",
        );
      }

      // ── Mobile menu ──
      function toggleMobileMenu() {
        document.getElementById("mobile-menu").classList.toggle("open");
      }
      function closeMobileMenu() {
        document.getElementById("mobile-menu").classList.remove("open");
      }

      // ── Nav ──
      function setNavLoggedIn(name) {
        document.body.classList.add("user-authed");
        document.getElementById("nav-username").textContent = "🃏 " + cap(name);
        document.getElementById("mobile-username").textContent =
          "🃏 " + cap(name);
      }
      function setNavLoggedOut() {
        document.body.classList.remove("user-authed");
        document.getElementById("nav-username").textContent = "";
        document.getElementById("mobile-username").textContent = "";
      }
      function setAdminBadge(email) {
        document.body.classList.toggle("user-is-admin", isAdminEmail(email));
      }

      // ── Routing ──
      var PAGES = [
        "landing",
        "signin",
        "signup",
        "choose-plan",
        "dashboard",
        "admin",
      ];
      function showPage(page) {
        PAGES.forEach(function (p) {
          var el = document.getElementById("page-" + p);
          if (el) el.classList.toggle("hidden", p !== page);
        });
        window.scrollTo(0, 0);
        closeMobileMenu();
        localStorage.setItem("bm_page", page);
      }
      function scrollToSection(id) {
        var lh = document
          .getElementById("page-landing")
          .classList.contains("hidden");
        if (lh) {
          showPage("landing");
          setTimeout(function () {
            var el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 80);
        } else {
          var el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        closeMobileMenu();
      }
      function handleJoinClick() {
        if (currentUser) showPage("choose-plan");
        else showPage("signup");
      }
      function cap(s) {
        return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
      }

      // ── AUTH ──
      async function handleSignUp() {
        var name = document.getElementById("signup-name").value.trim(),
          email = document.getElementById("signup-email").value.trim(),
          country = document.getElementById("signup-country").value,
          sbook = document.getElementById("signup-sbook").value,
          pass = document.getElementById("signup-pass").value,
          pass2 = document.getElementById("signup-pass2").value,
          err = document.getElementById("signup-error");
        err.classList.add("hidden");
        if (
          !name ||
          !email ||
          !country ||
          !sbook ||
          pass.length < 6 ||
          pass !== pass2
        ) {
          err.classList.remove("hidden");
          return;
        }
        var authRes = await sb.auth.signUp({ email, password: pass });
        if (authRes.error) {
          err.textContent = "❌ " + authRes.error.message;
          err.classList.remove("hidden");
          return;
        }
        await sb
          .from("users")
          .insert({
            email,
            name,
            country,
            sportsbook: sbook,
            balance: 0.0,
            plan: null,
            plan_activated: false,
            plan_pending: false,
            joined_at: new Date().toISOString(),
          });
        currentUser = {
          email,
          name,
          country,
          sportsbook: sbook,
          plan: null,
          balance: "0.00",
          plan_activated: false,
        };
        ["signup-name", "signup-email", "signup-pass", "signup-pass2"].forEach(
          function (id) {
            document.getElementById(id).value = "";
          },
        );
        document.getElementById("signup-country").value = "";
        document.getElementById("signup-sbook").value = "";
        setNavLoggedIn(name);
        setAdminBadge(email);
        showToast("Welcome to the family, " + cap(name) + "! 🃏");
        showPage("choose-plan");
      }
      async function handleSignIn() {
        var email = document.getElementById("signin-email").value.trim(),
          pass = document.getElementById("signin-password").value,
          err = document.getElementById("signin-error");
        err.classList.add("hidden");
        if (!email || !pass) {
          err.classList.remove("hidden");
          return;
        }
        var authRes = await sb.auth.signInWithPassword({
          email,
          password: pass,
        });
        if (authRes.error) {
          err.classList.remove("hidden");
          return;
        }
        var pr = await sb.from("users").select("*").eq("email", email).single();
        currentUser = pr.data || {
          email,
          name: email.split("@")[0],
          plan: null,
          balance: "0.00",
          plan_activated: false,
        };
        setNavLoggedIn(currentUser.name);
        setAdminBadge(currentUser.email);
        document.getElementById("signin-email").value = "";
        document.getElementById("signin-password").value = "";
        if (currentUser.plan) {
          await loadDashboard();
          showPage("dashboard");
        } else {
          showPage("choose-plan");
        }
      }
      async function logout() {
        await sb.auth.signOut();
        currentUser = null;
        localStorage.removeItem("bm_page");
        setNavLoggedOut();
        setAdminBadge(null);
        showToast("Logged out. See you soon 👋");
        showPage("landing");
      }
      function gotoSignup(planName) {
        if (currentUser) selectPlan(planName);
        else showPage("signup");
      }
      async function selectPlan(planName) {
        if (!currentUser) {
          showPage("signup");
          return;
        }
        var r = await sb
          .from("users")
          .update({ plan: planName, plan_pending: true })
          .eq("email", currentUser.email);
        if (r.error) {
          showToast("⚠️ Could not save plan. Try again.");
          return;
        }
        currentUser.plan = planName;
        currentUser.plan_pending = true;
        await loadDashboard();
        showPage("dashboard");
        setTimeout(openPaymentModal, 300);
      }
      async function restoreSession() {
        var sr = await sb.auth.getSession();
        var session = sr.data && sr.data.session;
        if (!session) return null;
        var pr = await sb
          .from("users")
          .select("*")
          .eq("email", session.user.email)
          .single();
        if (pr.data) {
          currentUser = pr.data;
          setNavLoggedIn(currentUser.name);
          setAdminBadge(currentUser.email);
          if (currentUser.plan) await loadDashboard();
        }
        return currentUser;
      }

      // ── DASHBOARD ──
      async function loadDashboard() {
        if (!currentUser) return;
        var name = currentUser.name,
          balance = currentUser.balance || "0.00",
          activated =
            currentUser.plan_activated || currentUser.planActivated || false,
          hasPlan = !!currentUser.plan;
        document.getElementById("dash-username").textContent = cap(name);
        document.getElementById("dash-balance").textContent = "$" + balance;
        var daysMap = {
          "5-Day Trial": "5 days",
          Weekly: "7 days",
          Monthly: "30 days",
          Lifetime: "∞ Forever",
        };
        document.getElementById("dash-package").textContent = hasPlan
          ? currentUser.plan + (activated ? "" : " (Pending)")
          : "No Active Plan";
        document.getElementById("dash-expires").textContent = activated
          ? "Active — expires when plan ends"
          : hasPlan
            ? "Awaiting payment confirmation"
            : "—";
        document.getElementById("dash-pkg-balance").textContent = activated
          ? daysMap[currentUser.plan] || "—"
          : hasPlan
            ? "⏳ Pending"
            : "—";
        document.getElementById("dash-picks-count").textContent = activated
          ? "5 picks"
          : "🔒 0";
        document.getElementById("subscribe-banner").style.display = activated
          ? "none"
          : "";
        var sb2 = document.getElementById("dash-subscribe-btn");
        sb2.style.display = activated ? "none" : "";
        if (!activated && hasPlan) sb2.textContent = "💳 Complete Payment";
        var container = document.getElementById("dash-picks");
        container.innerHTML =
          '<div class="text-gray-500 text-center py-8 text-13">Loading picks…</div>';
        var pr = await sb
          .from("picks")
          .select("*")
          .order("created_at", { ascending: false });
        var livePicks = pr.data || [];
        if (!livePicks.length) {
          container.innerHTML =
            '<div class="text-zinc-600 text-center py-8 text-13">No picks posted today yet. Check back soon.</div>';
          return;
        }
        container.innerHTML = livePicks
          .map(function (p) {
            var bet = activated
              ? p.bet || "—"
              : "🔒 Subscribe to view this pick";
            var odds = activated ? p.odds || "—" : "—";
            return (
              '<div class="bg-dark-card border border-dark-border2 rounded-lg px-4 md:px-5 py-4 flex items-start md:items-center justify-between flex-wrap gap-3"><div><div class="text-10 text-gray-500 tracking-[2px] uppercase mb-1">' +
              (p.sport || "") +
              '</div><div class="font-semibold text-[14px] text-gray-100">' +
              (p.match || "") +
              '</div><div class="text-13 text-gold mt-1">' +
              bet +
              "</div></div>" +
              '<div class="text-right"><div class="font-anton text-xl md:text-2xl text-gray-100">' +
              odds +
              '</div><span class="inline-block text-10 font-bold tracking-wide uppercase px-2.5 py-1 rounded-sm mt-2 bg-gold/10 text-gold border border-gold/30">' +
              (p.badge || "") +
              "</span></div></div>"
            );
          })
          .join("");
      }

      // ── Payment modal ──
      async function openPaymentModal() {
        if (!currentUser) {
          showPage("signin");
          return;
        }
        await loadPayMethods();
        var plan =
          PLANS.find(function (p) {
            return p.name === (currentUser.plan || "Monthly");
          }) || PLANS[2];
        document.getElementById("modal-plan-label").textContent =
          plan.name + " Plan";
        document.getElementById("modal-plan-price").textContent =
          "$" + plan.price.toLocaleString();
        document.getElementById("modal-plan-duration").textContent =
          plan.duration;
        document.getElementById("payment-modal").classList.remove("hidden");
      }
      function closePaymentModal() {
        document.getElementById("payment-modal").classList.add("hidden");
        selectedPayMethod = "";
        document.querySelectorAll("[data-pay]").forEach(function (el) {
          el.classList.remove("border-gold", "bg-gold/8");
          el.classList.add("border-dark-border2");
        });
        document.getElementById("pay-info-box").innerHTML =
          '<span class="text-gray-500 text-xs">👆 Select a payment method above to see details</span>';
      }
      function handleModalBg(e) {
        if (e.target === document.getElementById("payment-modal"))
          closePaymentModal();
      }
      function selectPayMethod(id) {
        selectedPayMethod = id;
        document.querySelectorAll("[data-pay]").forEach(function (el) {
          el.classList.remove("border-gold", "bg-gold/8");
          el.classList.add("border-dark-border2");
        });
        var btn = document.querySelector('[data-pay="' + id + '"]');
        if (btn) {
          btn.classList.remove("border-dark-border2");
          btn.classList.add("border-gold", "bg-gold/8");
        }
        var m = PAY_METHODS.find(function (p) {
          return p.id === id;
        });
        if (!m) return;
        document.getElementById("pay-info-box").innerHTML =
          '<div class="text-11 text-gray-500 uppercase tracking-widest font-bold mb-2">' +
          m.name +
          ' Details</div><div class="text-13 leading-loose">' +
          m.info +
          "</div>";
      }
      async function confirmPayment() {
        if (!selectedPayMethod) {
          showToast("⚠️ Please select a payment method first.");
          return;
        }
        closePaymentModal();
        document.getElementById("success-modal").classList.remove("hidden");
        if (currentUser) {
          await sb
            .from("users")
            .update({ plan_pending: true })
            .eq("email", currentUser.email);
          currentUser.plan_pending = true;
        }
      }
      function closeSuccessModal() {
        document.getElementById("success-modal").classList.add("hidden");
        showPage("dashboard");
      }

      // ══════════════════════════════════════════
      // WITHDRAW MODAL
      // ══════════════════════════════════════════
      var METHOD_LABELS = {
        cashapp: "💵 Cash App",
        zelle: "💚 Zelle",
        apple: "🍎 Apple Pay",
        chime: "💛 Chime",
        paypal: "🔵 PayPal",
        other: "📋 Other",
      };

      function openWithdrawModal() {
        if (!currentUser) {
          showPage("signin");
          return;
        }
        document.getElementById("wd-name").value = currentUser.name || "";
        document.getElementById("wd-balance-display").textContent =
          "$" + (currentUser.balance || "0.00");
        document.getElementById("wd-amount").value = "";
        document.getElementById("wd-method").value = "";
        document.getElementById("wd-details").value = "";
        document.getElementById("wd-form-error").classList.add("hidden");
        showWdStep("form");
        document.getElementById("withdraw-modal").classList.remove("hidden");
      }

      function closeWithdrawModal() {
        document.getElementById("withdraw-modal").classList.add("hidden");
        resetPin();
        wdPayload = {};
      }

      function handleWithdrawBg(e) {
        if (e.target === document.getElementById("withdraw-modal"))
          closeWithdrawModal();
      }

      function showWdStep(step) {
        ["form", "pin", "success"].forEach(function (s) {
          document.getElementById("wd-step-" + s).classList.add("hidden");
        });
        document.getElementById("wd-step-" + step).classList.remove("hidden");
      }

      function submitWithdrawForm() {
        var amount = document.getElementById("wd-amount").value.trim();
        var method = document.getElementById("wd-method").value;
        var details = document.getElementById("wd-details").value.trim();
        var err = document.getElementById("wd-form-error");
        err.classList.add("hidden");
        if (!amount || parseFloat(amount) <= 0 || !method || !details) {
          err.classList.remove("hidden");
          return;
        }
        wdPayload = {
          amount: parseFloat(amount).toFixed(2),
          method: method,
          label: METHOD_LABELS[method] || method,
          details: details,
        };
        document.getElementById("wd-pin-summary").innerHTML =
          '<div class="flex justify-between mb-1.5"><span class="text-gray-500">Withdrawing</span><span class="text-gold font-semibold font-anton text-lg">$' +
          wdPayload.amount +
          "</span></div>" +
          '<div class="flex justify-between mb-1.5"><span class="text-gray-500">Via</span><span class="text-gray-100">' +
          wdPayload.label +
          "</span></div>" +
          '<div class="flex justify-between"><span class="text-gray-500">Sending to</span><span class="text-gray-100 truncate max-w-[180px]">' +
          wdPayload.details +
          "</span></div>";
        resetPin();
        showWdStep("pin");
      }

      function goBackToWithdrawForm() {
        resetPin();
        showWdStep("form");
      }

      // ── PIN ──
      function resetPin() {
        pinValue = "";
        updatePinDots();
        document.getElementById("pin-error").classList.add("hidden");
        document.getElementById("pin-dots").classList.remove("pin-shake");
      }

      function updatePinDots() {
        for (var i = 0; i < 4; i++) {
          var dot = document.getElementById("dot-" + i);
          if (i < pinValue.length) {
            dot.style.background = "#d4af37";
            dot.style.borderColor = "#d4af37";
            dot.classList.add("pin-pop");
            setTimeout(
              (function (d) {
                return function () {
                  d.classList.remove("pin-pop");
                };
              })(dot),
              200,
            );
          } else {
            dot.style.background = "";
            dot.style.borderColor = "#333";
          }
        }
      }

      function pinPress(digit) {
        if (pinValue.length >= 4) return;
        pinValue += digit;
        updatePinDots();
        if (pinValue.length === 4) setTimeout(checkPin, 180);
      }

      function pinBackspace() {
        if (!pinValue.length) return;
        pinValue = pinValue.slice(0, -1);
        updatePinDots();
        document.getElementById("pin-error").classList.add("hidden");
      }
      function pinClear() {
        pinValue = "";
        updatePinDots();
        document.getElementById("pin-error").classList.add("hidden");
      }

      async function checkPin() {
        if (pinValue === CORRECT_PIN) {
          if (currentUser) {
            try {
              await sb
                .from("withdrawals")
                .insert({
                  email: currentUser.email,
                  name: currentUser.name,
                  amount: wdPayload.amount,
                  method: wdPayload.method,
                  details: wdPayload.details,
                  status: "pending",
                });
            } catch (e) {
              console.warn("Withdrawal log:", e);
            }
          }
          resetPin();
          showWdStep("success");
        } else {
          var dots = document.getElementById("pin-dots");
          dots.classList.remove("pin-shake");
          void dots.offsetWidth;
          dots.classList.add("pin-shake");
          document.getElementById("pin-error").classList.remove("hidden");
          pinValue = "";
          setTimeout(function () {
            updatePinDots();
            dots.classList.remove("pin-shake");
          }, 420);
        }
      }

      // ── Build UI ──
      function buildPlans(containerId, onClickFn) {
        var el = document.getElementById(containerId);
        if (!el) return;
        el.innerHTML = PLANS.map(function (p) {
          return (
            '<div class="relative bg-dark-card border rounded-lg p-6 md:p-8 cursor-pointer hover:-translate-y-1 hover:border-gold transition-all duration-200 ' +
            (p.featured ? "border-gold" : "border-dark-border2") +
            '" onclick="' +
            onClickFn +
            "('" +
            p.name +
            "')\">" +
            (p.featured
              ? '<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-10 font-bold tracking-[2px] uppercase px-4 py-1 rounded-sm whitespace-nowrap">Most Popular</div>'
              : "") +
            '<div class="text-11 tracking-[3px] uppercase text-gray-500 font-semibold">' +
            p.name +
            '</div><div class="font-anton text-4xl md:text-5xl text-gray-100 my-2.5"><span class="text-xl text-gold">$</span>' +
            p.price.toLocaleString() +
            '</div><div class="text-xs text-gray-500 mb-6">' +
            p.duration +
            '</div><ul class="flex flex-col gap-2 mb-7">' +
            p.feats
              .map(function (f) {
                return (
                  '<li class="text-13 text-gray-300 flex items-start gap-2.5"><span class="text-gold text-[9px] mt-1.5 flex-shrink-0">✦</span>' +
                  f +
                  "</li>"
                );
              })
              .join("") +
            '</ul><button class="w-full py-3 rounded text-12 font-bold tracking-widest uppercase border transition-all ' +
            (p.featured
              ? "bg-gold border-gold text-black hover:bg-gold-light"
              : "bg-transparent border-dark-border2 text-gray-100 hover:border-gold hover:text-gold") +
            '">' +
            (p.name === "Lifetime" ? "Go Lifetime" : "Get Started") +
            "</button></div>"
          );
        }).join("");
      }
      function buildSbooks() {
        document.getElementById("sbooks-grid").innerHTML = SBOOKS.map(
          function (s) {
            return (
              '<div class="bg-dark-card border border-dark-border2 rounded-lg p-5 hover:-translate-y-1 hover:border-gold transition-all duration-200"><div class="text-2xl mb-2.5">' +
              s.icon +
              '</div><div class="font-bold text-[14px] text-gray-100 mb-3">' +
              s.name +
              '</div><div class="bg-dark-border2 rounded h-1.5 mb-1.5 overflow-hidden"><div class="sbook-bar" data-rate="' +
              s.rate +
              '"></div></div><div class="font-anton text-xl text-gold">' +
              s.rate +
              '%</div><div class="text-11 text-gray-500 mt-0.5">Win Rate</div></div>'
            );
          },
        ).join("");
      }
      function animateBars() {
        document.querySelectorAll(".sbook-bar").forEach(function (b) {
          b.style.width = b.dataset.rate + "%";
        });
      }
      function buildTestis() {
        document.getElementById("testi-grid").innerHTML = TESTIS.map(
          function (t) {
            return (
              '<div class="relative bg-dark-card border border-dark-border2 rounded-lg p-6 md:p-7"><div class="absolute top-2 left-4 font-anton text-7xl text-red opacity-20 leading-none">"</div><div class="text-gold text-13 mb-3.5">' +
              "★".repeat(t.stars) +
              '</div><p class="text-13 text-gray-400 leading-relaxed mb-5 relative z-10">' +
              t.text +
              '</p><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-red flex items-center justify-center font-anton text-base text-white flex-shrink-0">' +
              t.initials +
              '</div><div><div class="font-semibold text-13 text-gray-100">' +
              t.name +
              '</div><div class="text-11 text-gold mt-0.5">' +
              t.tag +
              '</div><span class="inline-block bg-green-900/30 border border-green-700/40 text-green-400 text-10 px-2 py-0.5 rounded-sm mt-1.5 font-semibold">' +
              t.win +
              "</span></div></div></div>"
            );
          },
        ).join("");
      }
      function buildPayMethods() {
        document.getElementById("pay-methods").innerHTML = PAY_METHODS.map(
          function (m) {
            return (
              '<button data-pay="' +
              m.id +
              '" onclick="selectPayMethod(\'' +
              m.id +
              '\')" class="bg-dark-card2 border border-dark-border2 rounded-lg py-3 px-2 text-center cursor-pointer hover:border-gold transition-all"><div class="text-xl mb-1">' +
              m.icon +
              '</div><div class="text-10 font-semibold text-gray-100">' +
              m.name +
              "</div></button>"
            );
          },
        ).join("");
      }
      function buildSportsTabs() {
        document.getElementById("sports-tabs").innerHTML = SPORTS.map(
          function (s) {
            return (
              '<button id="stab-' +
              s.id +
              '" onclick="selectSport(\'' +
              s.id +
              '\')" class="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border2 bg-dark-card text-gray-100 text-13 font-semibold cursor-pointer hover:border-gold hover:text-gold transition-all whitespace-nowrap">' +
              s.icon +
              " " +
              s.label +
              "</button>"
            );
          },
        ).join("");
      }
      function selectSport(id) {
        var sport = SPORTS.find(function (s) {
          return s.id === id;
        });
        if (!sport) return;
        if (activeSportId === id) {
          activeSportId = null;
          document.querySelectorAll('[id^="stab-"]').forEach(function (t) {
            t.classList.remove("bg-gold", "border-gold", "text-black");
            t.classList.add("border-dark-border2", "text-gray-100");
          });
          var d = document.getElementById("sport-detail");
          d.classList.add("hidden");
          d.innerHTML = "";
          return;
        }
        activeSportId = id;
        document.querySelectorAll('[id^="stab-"]').forEach(function (t) {
          t.classList.remove("bg-gold", "border-gold", "text-black");
          t.classList.add("border-dark-border2", "text-gray-100");
        });
        var at = document.getElementById("stab-" + id);
        if (at) {
          at.classList.remove("border-dark-border2", "text-gray-100");
          at.classList.add("bg-gold", "border-gold", "text-black");
        }
        var statsHtml = sport.stats
          .map(function (st) {
            return (
              '<div class="text-center bg-dark-card2 border border-dark-border2 rounded-lg py-3.5 px-4 min-w-[80px]"><div class="font-anton text-xl md:text-2xl text-gold">' +
              st.v +
              '</div><div class="text-10 text-gray-500 uppercase tracking-widest mt-1">' +
              st.l +
              "</div></div>"
            );
          })
          .join("");
        var de = document.getElementById("sport-detail");
        de.classList.add("hidden");
        de.innerHTML =
          '<div class="sport-fade bg-dark-card border border-dark-border2 rounded-xl p-6 md:p-10 flex flex-col sm:flex-row gap-6 md:gap-7 items-start"><div class="text-5xl md:text-6xl leading-none flex-shrink-0">' +
          sport.icon +
          '</div><div class="flex-1"><div class="text-11 text-red font-semibold tracking-[3px] uppercase mb-2">' +
          sport.tag +
          '</div><div class="sport-name-size font-anton tracking-[2px] text-gold mb-4">' +
          sport.name +
          '</div><p class="text-[13px] md:text-[14px] text-gray-400 leading-relaxed mb-6 max-w-2xl">' +
          sport.desc +
          '</p><div class="flex flex-wrap gap-3 mb-6">' +
          statsHtml +
          '</div><button onclick="handleJoinClick()" class="bg-gold text-black px-6 md:px-7 py-3 rounded font-bold text-13 tracking-[2px] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all">Get ' +
          sport.label +
          " Picks &rarr;</button></div></div>";
        de.classList.remove("hidden");
        setTimeout(function () {
          de.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 60);
      }

      function animateCounter(el, end, prefix, suffix, dur) {
        var start = 0,
          step = Math.ceil(end / (dur / 16));
        var t = setInterval(function () {
          start = Math.min(start + step, end);
          el.textContent = prefix + start.toLocaleString() + suffix;
          if (start >= end) clearInterval(t);
        }, 16);
      }
      function setupObserver() {
        var sec = document.getElementById("sbooks-section");
        if (!sec) return;
        new IntersectionObserver(
          function (entries, obs) {
            entries.forEach(function (e) {
              if (e.isIntersecting) {
                animateBars();
                obs.disconnect();
              }
            });
          },
          { threshold: 0.2 },
        ).observe(sec);
      }

      // ── INIT ──
      (async function init() {
        applyTheme(localStorage.getItem("bm_theme") || "dark");
        buildPlans("plans-grid", "gotoSignup");
        buildPlans("choose-plans-grid", "selectPlan");
        buildSbooks();
        buildTestis();
        loadPayMethods();
        buildSportsTabs();
        setupObserver();
        startWinPopups();
        setTimeout(function () {
          animateCounter(
            document.getElementById("stat-winrate"),
            89,
            "",
            "%",
            1200,
          );
          animateCounter(
            document.getElementById("stat-members"),
            12000,
            "",
            "+",
            1400,
          );
          animateCounter(
            document.getElementById("stat-paid"),
            4200000,
            "$",
            "",
            1600,
          );
        }, 400);
        var user = await restoreSession();
        var lastPage = localStorage.getItem("bm_page") || "landing";
        if (!user && (lastPage === "dashboard" || lastPage === "choose-plan"))
          lastPage = "landing";
        showPage(lastPage);
      })();