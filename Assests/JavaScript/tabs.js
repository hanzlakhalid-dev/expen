// Tab swithing

function tab_switch(tab) {
    const tab_name = tab.getAttribute('data-tab');
    // add/ remove tab classes
    const active_tab = document.querySelectorAll('.active-tab');
    active_tab.forEach(tab_active => {
        tab_active.classList.remove('active-tab');
        tab_active.classList.add('tab');
    })
    document.querySelectorAll(`[data-tab="${tab_name}"]`).forEach(tab_toggler => {
        tab_toggler.classList.add('active-tab');
        tab_toggler.classList.remove('tab');
    })
    // Content change
    const old_section = document.querySelector('.active-section')
    old_section.classList.remove('active-section');
    const data_Class = tab.getAttribute('data-section');
    document.body.querySelector(`.${data_Class}`).classList.add('active-section');
    // Content change mobile
    const mobile_header = document.querySelector('.mobile-title');
    const heading = data_Class[0].toUpperCase() + data_Class.slice(1);
    mobile_header.textContent = heading;


}
// panel switch

function panelswitch(panel) {
    const panel_name = panel.getAttribute('data-tab');
    // add/ remove tab classes
    const active_tab = document.querySelector('.active-panel-switch');
    const active_tab_name = active_tab.getAttribute('data-panel');
    active_tab.classList.remove('active-panel-switch');
    panel.classList.add('active-panel-switch');
    // Content Change
    const old_section = document.querySelector('.active-panel')
    old_section.classList.remove('active-panel');
    const data_Class = panel.getAttribute('data-panel');
    document.body.querySelector(`.${data_Class}`).classList.add('active-panel')
}
