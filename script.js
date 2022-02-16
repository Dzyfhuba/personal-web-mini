var loader = setInterval(function() {
    if (document.readyState !== "complete") return;
    clearInterval(loader);

    keyword = document.querySelectorAll('#keyword');

    keyword.forEach(e => {
        e.setAttribute('href', `https://google.com/search?q=${e.innerHTML}`);
        e.setAttribute('target', '_blank');
    });

    past_keyword = document.getElementById('past-keyword');
    for (let id = 0; id < 5; id++) {
        past_keyword.innerHTML += `${'keyword'+id}; `;
    }

    project_keyword = document.getElementById('project-keyword');
    for (let id = 0; id < 5; id++) {
        project_keyword.innerHTML += `${'keyword'+id}; `;
    }

    past = document.getElementById('past');
    past_temp = "";
    for (let id = 0; id < 5; id++) {
        past_temp += past.outerHTML;
    }
    past.outerHTML = past_temp;

    nav_toggle = document.getElementById('toggle');

    contactme = document.getElementById('profile');
    nav_toggle.addEventListener('change', function() {
        if (nav_toggle.checked) {
            document.querySelector('nav ul').classList.remove('hide');
        } else {
            document.querySelector('nav ul').classList.add('hide');
        }
    });
}, 1000);