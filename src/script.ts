interface Comic {
    "month": string,
    "num": number,
    "link": string,
    "year": string,
    "news": string,
    "safe_title": string,
    "transcript": string,
    "alt": string,
    "img": string,
    "title": string,
    "day": string
}

async function getComicData(id) {
    const url = `https://fwd.innopolis.university/api/comic?id=${id}`;
    const response = await fetch(url, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    const comic = ((await response.json()) as Comic);

    const comicTitle = document.getElementById('comicTitle') as HTMLInputElement;
    comicTitle.innerHTML = comic.safe_title;

    const comicDate = document.getElementById('comicDate') as HTMLInputElement;
    const dateNow = new Date() as Date;
    comicDate.innerHTML = dateNow.toLocaleDateString();

    const comicImage = document.querySelector('#comicImg') as HTMLImageElement;
    comicImage.src = comic.img;
    comicImage.alt = comic.alt;
}

async function setupComic() {
    const url='https://fwd.innopolis.university/api/hw2?email=a.shinbaeyeva@innopolis.university';
    const response = await fetch(url, {
        method: 'GET',
    });
    const id = await response.json();
    console.log(id);
    getComicData(id);
}

setupComic();
