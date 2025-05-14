function switchImage(year) {
    const image = document.getElementById("charts");
    const caption = document.getElementById("caption");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => button.classList.remove("active"));

    let src, alt, text;

    if (year === "2019") {
        src = "pet_2019.png";
        alt = "Pet ownership in 2019";
        text = "Fig 1. Percent of most popular pets owned by Australians in 2019. Data Source: <a href='https://animalmedicinesaustralia.org.au/wp-content/uploads/2021/08/AMAU005-PATP-Report21_v1.41_WEB.pdf'>Animal Medicines Australia Report</a>";
        buttons[0].classList.add("active");
    } else if (year === "2021") {
        src = "pet_2021.png";
        alt = "Pet ownership in 2021";
        text = "Fig 2. Percent of most popular pets owned by Australians in 2021. Data Source: <a href='https://animalmedicinesaustralia.org.au/wp-content/uploads/2021/08/AMAU005-PATP-Report21_v1.41_WEB.pdf'>Animal Medicines Australia Report</a>";
        buttons[1].classList.add("active");
    } else if (year === "both") {
        src = "pet_comparison.png";
        alt = "Comparison of pet ownership in 2019 and 2021";
        text = "Fig 3. Percent of most popular pets owned by Australians in 2019 and 2021. Data Source: <a href='https://animalmedicinesaustralia.org.au/wp-content/uploads/2021/08/AMAU005-PATP-Report21_v1.41_WEB.pdf'>Animal Medicines Australia Report</a>";
        buttons[2].classList.add("active");
    }

    image.src = src;
    image.alt = alt;
    caption.innerHTML = text;
}
