const path = require("path");
const { chromium } = require("playwright");

const rootDir = path.resolve(__dirname, "..");
const cvDir = path.join(rootDir, "public", "cv");

const targets = [
    { html: "cv-jakub-wywrocki-en.html", pdf: "cv-jakub-wywrocki-en.pdf" },
    { html: "cv-jakub-wywrocki-pl.html", pdf: "cv-jakub-wywrocki-pl.pdf" },
];

const toFileUrl = (filePath) => `file://${filePath.replace(/\\/g, "/")}`;

const generatePdf = async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (const target of targets) {
        const htmlPath = path.join(cvDir, target.html);
        const pdfPath = path.join(cvDir, target.pdf);
        await page.goto(toFileUrl(htmlPath), { waitUntil: "networkidle" });
        await page.emulateMedia({ media: "print" });
        await page.pdf({
            path: pdfPath,
            format: "A4",
            printBackground: false,
            margin: { top: "12mm", bottom: "12mm", left: "12mm", right: "12mm" },
        });
    }

    await browser.close();
};

generatePdf().catch((error) => {
    console.error(error);
    process.exit(1);
});
