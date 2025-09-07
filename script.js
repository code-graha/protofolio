// // Prevent right click globally
// window.top.document.addEventListener('contextmenu', e => e.preventDefault());

// // Disable specific key combos
// window.top.document.addEventListener('keydown', function (e) {
//     if (
//         e.key === 'F12' ||
//         (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
//         (e.ctrlKey && e.key === 'U')
//     ) {
//         e.preventDefault();
//         return false;
//     }
// });

// // Detect DevTools in top window
// let devtoolsOpen = false;
// const threshold = 160;

// setInterval(function () {
//     const widthThreshold = window.top.outerWidth - window.top.innerWidth > threshold;
//     const heightThreshold = window.top.outerHeight - window.top.innerHeight > threshold;

//     if (widthThreshold || heightThreshold) {
//         if (!devtoolsOpen) {
//             devtoolsOpen = true;
//             window.top.location.replace("500.html"); // force parent redirect
//         }
//     } else {
//         devtoolsOpen = false;
//     }
// }, 1000);


// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable specific key combinations
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});


// Only run if NOT inside an iframe
if (window.top === window.self) {
    let devtoolsOpen = false;
    const threshold = 160;

    setInterval(function () {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                // Action: redirect or clear page
                window.location.replace("500");
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);
}