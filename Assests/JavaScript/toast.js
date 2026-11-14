// Toast
// ShowToast functionality
const TOAST_DURATION = 5000;
const ShowToast = (Heading, Text, Type) => {
    if (document.body.querySelector(`.toast-${Type}`)) {
        document.body.querySelector(`.toast-${Type}`).remove();
    }
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.classList.add(`toast-${Type}`);
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    switch (Type) {
        case "success":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
        case "error":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM11.25 8a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0V8Zm0 7.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
        case "warning":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
        case "info":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM12 10.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 10.5Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
    }

    document.body.append(toast);

    setTimeout(() => {
        toast.classList.add('Toast-out-Animation');
        toast.addEventListener('animationend', function () {
            toast.remove();
        }, { once: true })
    }, TOAST_DURATION)
}
document.body.addEventListener('click', function (e) {
    if (e.target.closest('.toast .Toast-cross-btn')) {
        const toast = e.target.closest('.toast')
        toast.classList.add('Toast-out-Animation');
        toast.addEventListener('animationend', function () {
            toast.remove();
        }, { once: true })
    }
});
