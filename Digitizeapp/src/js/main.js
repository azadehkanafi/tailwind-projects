function showTab(tab, button) {
    const content = {
        design: "کمپانی اپل پس از معرفی سری آیفون ۱۲ بار دیگر طراحی گوشی های خود را تغییر داد...",
        camera: "آیفون ۱۳ پرو دارای یک سیستم دوربین پیشرفته با حسگرهای جدید و بهبود یافته است...",
        battery: "باتری آیفون ۱۳ پرو عمر بیشتری نسبت به نسل قبلی خود دارد و کارایی بهتری ارائه می‌دهد..."
    };
    
    document.getElementById('tab-content').innerHTML = `<h2 class='text-xl font-bold text-slate-800'>${button.innerText}</h2><p class='mt-2 text-gray-700'>${content[tab]}</p>`;
    
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("bg-white", "shadow-md");
        btn.classList.add("text-gray-500");
    });
    button.classList.add("bg-white", "shadow-md");
    button.classList.remove("text-gray-500");
}


// filter section
document.getElementById("openFilter").addEventListener("click", function () {
    document.getElementById("filterModal").classList.remove("hidden");
});

document.getElementById("closeFilter").addEventListener("click", function () {
    document.getElementById("filterModal").classList.add("hidden");
});


//range price
const priceRange = document.getElementById('priceRange');
const selectedPrice = document.getElementById('selectedPrice');

priceRange.addEventListener('input', function () {
    selectedPrice.textContent = new Intl.NumberFormat('fa-IR').format(this.value);
});