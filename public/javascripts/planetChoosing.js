
function GiveJupiter() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
            CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2375" ;
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2375");
    }
    CurrentDescription.innerHTML = 'Крупнейшая планета Солнечной системы, пятая по удалённости от Солнца. Наряду с Сатурном, Ураном и Нептуном, Юпитер классифицируется как газовый гигант. Ряд атмосферных явлений на Юпитере: штормы, молнии, полярные сияния, — имеет масштабы, на порядки превосходящие земные. Примечательным образованием в атмосфере является Большое красное пятно — гигантский шторм, известный с XVII века. Юпитер имеет, по крайней мере, 79 спутников.  Его экваториальный радиус равен 71,4 тыс. км, что в 11,2 раза превышает радиус Земли. Среднее расстояние между Юпитером и Солнцем составляет 778,57 млн км (5,2 а.е.), а период обращения составляет 11,86 года.';
    CurrentTitle.innerHTML = "Юпитер";
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
}; //Смена информации для каждой планеты

function GiveEarth() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2392";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2392");
    }
    CurrentTitle.innerHTML = "Земля";
    CurrentDescription.innerHTML = "Третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс. Ось вращения Земли наклонена на 23,44° относительно перпендикуляра к её орбитальной плоскости, это вызывает сезонные изменения на поверхности планеты. Луна начала своё обращение на орбите вокруг Земли примерно 4,53 миллиарда лет назад. Гравитационное воздействие Луны на Землю является причиной возникновения океанских приливов. Также Луна стабилизирует наклон земной оси и постепенно замедляет вращение Земли. По различным оценкам, Земля будет сохранять условия для существования живых организмов ещё в течение 0,5—2,3 млрд лет."
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
};

function GiveMars() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2372";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2372");
    }
    CurrentTitle.innerHTML = "Марс";
    CurrentDescription.innerHTML = 'Четвёртая по удалённости от Солнца и седьмая по размерам планета Солнечной системы. Масса планеты составляет 10,7 % массы Земли. Особенностями поверхностного рельефа Марса можно считать ударные кратеры наподобие лунных, а также вулканы, долины, пустыни и полярные ледниковые шапки наподобие земных. Марс имеет период вращения и смену времён года, аналогичные земным, но его климат значительно холоднее и суше земного. Период вращения планеты — 24 часа 37 минут 22,7 секунды (относительно звёзд), длина средних марсианских солнечных суток составляет 24 часа 39 минут 35,24409 секунды, всего на 2,7 % длиннее земных суток. Для удобства марсианские сутки именуют «солами». Марсианский год равен 668,59 сола, что составляет 686,98 земных суток.';
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';

};

function GiveMercury() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2369";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2369");
    }
    CurrentTitle.innerHTML = "Меркурий";
    CurrentDescription.innerHTML ="Ближайшая к Солнцу планета Солнечной системы, наименьшая из планет земной группы. Названа в честь древнеримского бога торговли — быстрого Меркурия, поскольку она движется по небу быстрее других планет. Период обращения вокруг Солнца занимает всего 87,97 дней, самый короткий из всех планет Солнечной системы. Среднее расстояние до Солнца чуть меньше 58 млн км (57,91 млн км).  Ядро Меркурия составляет 83 % от всего объёма планеты. Температура на поверхности колеблется от 80 до 700 К (от −190 до +430 °C). Интересно также, что, хотя ближайшими по расположению орбит к Земле являются Марс и Венера, Меркурий в среднем чаще других является ближайшей к Земле планетой (поскольку другие планеты отдаляются в большей степени, не будучи столь «привязанными» к Солнцу)."
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
};

function GiveVenus() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2343";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2343");
    }
    CurrentTitle.innerHTML = "Венера";
    CurrentDescription.innerHTML = "Вторая по удалённости от Солнца планета Солнечной системы, наряду с Меркурием, Землёй и Марсом принадлежащая к семейству планет земной группы. Венерианский год составляет 224,7 земных суток. Она имеет самый длинный период вращения вокруг своей оси среди всех планет Солнечной системы и вращается в направлении, противоположном направлению вращения большинства планет. Венера не имеет естественных спутников. Это третий по яркости объект на небе Земли, после Солнца и Луны. Венера имеет плотную атмосферу, состоящую более чем на 96 % из углекислого газа. Атмосферное давление на поверхности планеты в 92 раза больше, чем на поверхности Земли. Это самая горячая планета в Солнечной системе: средняя температура её поверхности — 735 К (462 °С). Она покрыта непрозрачным слоем облаков из серной кислоты с высокой отражающей способностью. Высокая температура поверхности обусловлена действием парникового эффекта.";
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 16px';
    else
        CurrentDescription.style = 'font-size: 4.5vmin';
};

function GiveSaturn() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2355";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2355");
    }
    CurrentTitle.innerHTML = "Сатурн";
    CurrentDescription.innerHTML = "Шестая планета от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. В основном Сатурн состоит из водорода, с примесями гелия и следами воды, метана, аммиака и тяжёлых элементов. Внутренняя область представляет собой относительно небольшое ядро из железа, никеля и льда, покрытое тонким слоем металлического водорода и газообразным внешним слоем. Внешняя атмосфера планеты кажется из космоса спокойной и однородной, хотя иногда на ней появляются долговременные образования. Скорость ветра на Сатурне может достигать местами 1800 км/ч, что значительно больше, чем на Юпитере. Сатурн обладает заметной системой колец, состоящей главным образом из частичек льда, меньшего количества тяжёлых элементов и пыли.  Сатурн обращается вокруг Солнца за 10 759 суток (примерно 29,5 лет). Расстояние от Сатурна до Земли меняется в пределах от 1195 (8,0 а. е.) до 1660 (11,1 а. е.) млн км.";
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
};

function GiveUranus() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2344";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2344");
    }
    CurrentTitle.innerHTML = "Уран";
    CurrentDescription.innerHTML = 'Седьмая планета по удалённости от Солнца, третья по диаметру и четвёртая по массе. В отличие от газовых гигантов — Сатурна и Юпитера, состоящих в основном из водорода и гелия, в недрах Урана и схожего с ним Нептуна отсутствует металлический водород, но зато много льда в его высокотемпературных модификациях. По этой причине специалисты выделили эти две планеты в отдельную категорию «ледяных гигантов». Это самая холодная планетарная атмосфера Солнечной системы с минимальной температурой в 49 К (−224 °C). Средняя удалённость планеты от Солнца составляет 19,1914 а. е. (2,8 млрд км). Период полного обращения Урана вокруг Солнца составляет 84 земных года. Расстояние между Ураном и Землёй меняется от 2,6 до 3,15 млрд км. Плоскость экватора Урана наклонена к плоскости его орбиты под углом 97,86° — то есть планета вращается ретроградно, «лёжа на боку слегка вниз головой».'
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
};

function GiveNeptune() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2364";
    else {
        ViewStarted ("https://solarsystem.nasa.gov/gltf_embed/2364");
    }
    CurrentTitle.innerHTML = "Нептун";
    CurrentDescription.innerHTML = 'Восьмая и самая дальняя от Земли планета Солнечной системы. По диаметру находится на четвёртом месте, а по массе — на третьем. Масса Нептуна в 17,2 раза, а диаметр экватора в 3,9 раза больше земных. В атмосфере Нептуна бушуют самые сильные ветры среди планет Солнечной системы; по некоторым оценкам, их скорости могут достигать 600 м/с. Среднее расстояние между Нептуном и Солнцем — 4,55 млрд км (около 30,1 средних расстояний между Солнцем и Землёй, или 30,1 а. е.), и полный оборот вокруг Солнца у него занимает 164,79 года. Расстояние между Нептуном и Землёй составляет от 4,3 до 4,6 млрд км. Период вращения Нептуна вокруг своей оси составляет около 16 часов. Вследствие осевого наклона, сходного с Земным (23°), изменения в сидерическом периоде вращения в течение его длинного года не являются значимыми.'
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
};

function GiveSun() {
    if(CurrentPlanet.className !== "PlanetHolder") {
        CurrentPlanet.className = "PlanetHolder";
    }
    if (CurrentPlanet.childElementCount !== 0 )
        CurrentPlanet.firstChild.src = "https://solarsystem.nasa.gov/gltf_embed/2352";
    else {
        ViewStarted("https://solarsystem.nasa.gov/gltf_embed/2352");
    }
    CurrentTitle.innerHTML = 'Солнце';
    CurrentDescription.innerHTML = 'Ближайшая к Земле звезда. Средняя удалённость Солнца от Земли — 149,6 млн км — приблизительно равна астрономической единице, а видимый угловой диаметр при наблюдении с Земли, как и у Луны, — чуть больше полградуса (31—32 минуты). Солнце находится на расстоянии около 26 000 световых лет от центра Млечного Пути и вращается вокруг него, делая один оборот за 225—250 миллионов лет. Орбитальная скорость Солнца равна 217 км/с — таким образом, оно проходит один световой год за 1400 земных лет, а одну астрономическую единицу — за 8 земных суток.';
    if(document.documentElement.clientWidth >= 1031)
        CurrentDescription.style = 'font-size: 18px';
    else
        CurrentDescription.style = 'font-size: 5vmin';
};

function ViewStarted(source) { //Добавление кнопки и добавление iframe для 3d модели при первом нажатии на планету или кнопку
    let ePlanet = document.createElement("iframe");
    ePlanet.className = "PlanetModel";
    ePlanet.src = source;
    ePlanet.frameBorder = 0;
    let PrevButton = document.createElement('div');
    let textPrevButton = document.createElement('div');
    PrevButton.className = "NavBarButton";
    textPrevButton.className = "NavBarButtonText";
    textPrevButton.innerHTML = 'Назад';
    PrevButton.appendChild(textPrevButton);
    PrevButton.onclick = PrevPlanet;
    NextButtonText.innerHTML = 'Вперед';
    ButtonHolder.appendChild(PrevButton);
    CurrentPlanet.appendChild(ePlanet);
    MainHolder.style= "align-items: flex-start";
}

let i = -1; //Индекс для смены функции
function NextPlanet() {
    ++i;
    switch (i) {
        case 0: {
            GiveSun();
            break;
        }
        case 1: {
            GiveMercury();
            break;
        }
        case 2: {
            GiveVenus();
            break;
        }
        case 3: {
            GiveEarth();
            break;
        }
        case 4: {
            GiveMars();
            break;
        }
        case 5: {
            GiveJupiter();
            break;
        }
        case 6: {
            GiveSaturn();
            break;
        }
        case 7: {
            GiveUranus();
            break;
        }
        case 8: {
            GiveNeptune();
            i = 0;
            break;
        }

    }
} //Переключение планет вперёд

function PrevPlanet() {
    if(i !== 0)
        --i;
    else i = 8;
    switch (i){
        case 0: {
            GiveSun();
            break;
        }
        case 1: {
            GiveMercury();
            break;
        }
        case 2: {
            GiveVenus();
            break;
        }
        case 3: {
            GiveEarth();
            break;
        }
        case 4: {
            GiveMars();
            break;
        }
        case 5: {
            GiveJupiter();
            break;
        }
        case 6: {
            GiveSaturn();
            break;
        }
        case 7: {
            GiveUranus();
            break;
        }
        case 8: {
            GiveNeptune();
            break;
        }
    }
} //Переключение планет назад
