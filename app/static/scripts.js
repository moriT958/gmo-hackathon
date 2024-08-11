function showTab(tabId, event) {
    const tabs = document.querySelectorAll('.tab');
    const buttons = document.querySelectorAll('.tab-button');

    // すべてのタブを非表示にする
    tabs.forEach(tab => tab.style.display = 'none');

    // すべてのボタンからアクティブクラスを削除
    buttons.forEach(button => button.classList.remove('active'));

    // 指定されたタブを表示
    document.getElementById(tabId).style.display = 'block';

    // アクティブなボタンにクラスを追加
    event.currentTarget.classList.add('active');
}

// 最初のタブを表示
document.addEventListener('DOMContentLoaded', function () {
    showTab('tab1', { currentTarget: document.querySelector('.tab-button') });
});

function openModal(tabId) {
    const modal = document.getElementById(tabId + "Modal");
    console.log("Opening modal for tab:", tabId);
    console.log("Modal element:", modal);
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error("Modal not found for tab:", tabId);
    }
}

function closeModal(tabId) {
    const modal = document.getElementById(tabId + "Modal");
    if (modal) {
        modal.style.display = "none";
    }
}


// モーダルの外側をクリックしたときに閉じる
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

function initializeModals() {
    const openButtons = document.querySelectorAll('.open-modal-button');
    openButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            openModal(tabId);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    showTab('tab1', { currentTarget: document.querySelector('.tab-button') });
    initializeModals();
});