import {header} from "./blocks/header";
import {features} from "./blocks/features";
import {slider} from "./blocks/slider";
import {lang} from "./blocks/lang";

document.addEventListener("DOMContentLoaded", () => {
    header();
    features();
    slider();
    lang();
});