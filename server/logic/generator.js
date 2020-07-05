module.exports = {
    makePrediction,
    signsDeclinator,
}

function makePrediction(sign){
    sign = signsDeclinator(sign);
    if(!sign) { return null; }
    const predictionStart = `Вот, что звёзды говорят для ${sign} `;
    const predictionBody = randomPrediction();
    return(
        predictionStart + predictionBody
    );
}

function signsDeclinator(sign){
    signs = {
        "овен" : "овнов",
        "телец" : "тельцов",
        "близнецы":"близнецов",
        "рак" : "раков",
        "лев" : "львов",
        "дева" : "дев",
        "весы" : "весов",
        "скорпион":"скорпионов",
        "стрелец" : "стрельцов",
        "козерог" : "козерогов",
        "водолей":"водолей",
        "рыбы":"рыб",
        "рыба":"рыб",
    }
    return(signs[sign.toLowerCase()]|| null)
}

function randomPrediction(){
    return(
        predictions[Math.floor(Math.random() * 1000 % predictions.length)]
    )
}

const predictions = [
    'Нелегко сохранять душевное равновесие. Сегодня многое идет не по плану, а поступки и слова окружающих часто раздражают вас. Однако вы стараетесь не давать воли эмоциям и принимать взвешенные решения. Именно поэтому вам удается справиться со всеми трудностями. Самые везучие Овны достигнут нескольких важных целей.',
    'Стоит быть внимательнее в решении финансовых вопросов. Старайтесь не рисковать ни своими, ни чужими деньгами. Этот день не подходит для покупок, которые не планировались заранее. Легко ошибиться с выбором, приобрести вещь, которая вам совсем не нужна.',
    'Важно правильно оценить свои возможности. Именно от того, удастся ли вам это, зависит как сложится этот день. Он принесет немало соблазнов, идей и предложений, которые покажутся заманчивыми. Однако если вы не станете браться за все подряд, а подумаете, в чем действительно можно добиться успеха, вам удастся избежать многих напрасных переживаний и волнений.',
    'Обратите внимание на то, как складываются личные отношения. Не исключено, что близким сегодня будет особенно нужна ваша поддержка. Постарайтесь не отказывать в помощи тем, кто оказался в сложном положении.',
    'Вы хорошо ладите с окружающими, можете найти общий язык с людьми, которых прежде никто не понимал. Это часто помогает в делах. У вас появляются союзники и помощники. Благодаря их поддержке удастся воплотить в жизнь какие-то старые планы.',
    'Возможны необычные происшествия, неожиданные события. Они наведут вас на интересные мысли, подскажут, на каких делах стоит сосредоточиться сейчас. День подходит для общения с людьми, которые разделяют ваши увлечения. Вы многому у них научитесь. Не исключено начало дружеских отношений.',
    'Первая половина дня благоприятна. Это время подходит для общения со старыми и новыми знакомыми. Можно говорить о самых разных вещах. Без труда удается достичь взаимопонимания, найти решения, которые понравятся всем.',
    'Позже наступит чуть более сложный период. Появятся дела, требующие внимания, и ради них придется отложить запланированные развлечения, встречи, которых вы ждали с нетерпением. Однообразные занятия быстро нагоняют скуку, вы отвлекаетесь и можете ошибаться. Хорошо, если рядом будет человек, который во всем поможет.',
    'Подходящий день для того, чтобы браться за новые дела, в том числе, прежде казавшиеся слишком сложными. Сейчас вам многое по плечу; едва ли на пути возникнут преграды, которые вы не смогли бы преодолеть. В напряженные моменты рядом будут проверенные союзники, и вы сможете на них положиться во всем.',
    'Вероятны удачные совпадения, благодаря которым вы сможете улучшить свое финансовое положение, укрепить свои профессиональные позиции. Будет шанс заинтересовать своими идеями людей, от которых многое зависит.',
    'Удачный день, легкий и вдохновляющий. Нетрудно будет найти новых союзников, вы способны заинтересовать своими идеями многих. Не исключены знакомства, которые и порадуют вас, и подскажут, куда двигаться дальше. Вы искренне интересуетесь мнением окружающих, стараетесь учитывать их интересы, как бы ни складывались обстоятельства. Люди будут за это благодарны.',
    'Сегодня вы сможете завершить дела, которым отдали немало своего времени и энергии. Результат может оказаться не совсем таким, как ожидалось, но разочарованы вы не будете.',
    'Вряд ли день совершенно обойдется без трудностей, но речь будет идти скорее о мелких недоразумениях, чем о серьезных проблемах. Важно сохранять терпение, даже когда события развиваются очень медленно, и не торопиться с решительными действиями. Умение дождаться благоприятного момента дорогого стоит.',
    'Возможны небольшие денежные поступления, которые окажутся очень кстати. Вторая половина дня – благоприятное время для покупок, как запланированных заранее, так и спонтанных. Вы безошибочно выбираете отличные вещи не только для себя, но и для своих близких.',
    'Первая половина дня непроста. Возможны задержки в делах, досадные недоразумения, ошибки в расчетах. Вы не отказываетесь от задуманного, стараетесь довести начатое до конца, как бы ни складывались обстоятельства. Есть шанс добиться успеха, но не стоит надеяться на то, что это будет легко.',
    'Со временем влияние позитивных тенденций заметно усиливается. Вечером возможны и удачные совпадения, и приятные сюрпризы. Это время подходит и для того, чтобы пообщаться с людьми, по которым вы скучали. Наверняка найдется масса интересных идей для разговора.',
    'День складывается удачно, беспокоиться вам особенно не о чем. Можно добиться успеха в самых разных делах. Особенно хорошо вы справляетесь там, где нужно не следовать чужому примеру, а искать собственный путь к цели. Импровизации оказываются удачными, смелые идеи помогают быстро получить нужный результат.',
    'Для многих Стрельцов этот день будет связан с важными открытиями или получением информации, которая вскоре окажется полезной. Не упустите шанс восстановить старые связи. Можно помириться с теми, с кем вы были в ссоре, наладить отношения, складывавшиеся непросто.',
    'Не самый простой день, но все же достаточно удачный. Первая его половина подходит для полезных дел, а также для решения вопросов, которые важны не только для вас, но и для ваших близких. Вы внимательны, ничего не упускаете из виду, отлично справляетесь с тем, что оказалось не под силу другим.',
    'Вторая половина дня требует большей осторожности. В любых делах нужно уделять внимание мелким деталям. Помните: не стоит верить всем подряд, лучше проверять любую поступающую информацию. Даже близкие могут вводить вас в заблуждение, сами того не желая.',
    'Отличный плодотворный день, позволяющий быстро добиться многих целей, поставленных раньше. Вы видите возможности, которых прежде не замечали, и стараетесь не упустить ни одной из них. Решительность и целеустремленность приносят потрясающие плоды.',
    'Не исключены удачные совпадения, которые вы используете в своих интересах. Вся вторая половина дня благоприятна с точки зрения личных отношений. Найти общий язык с близкими будет даже легче, чем обычно. Не исключено, что вам предложат поддержку люди, от которых вы не ожидали ничего подобного.',
    'День складывается довольно удачно. Вряд ли стоит ждать от него головокружительных успехов и легких побед, но все будет идти неплохо. Проще всего добиться успеха в привычных и хорошо знакомых делах. Когда вы беретесь за что-то новое, могут возникать трудности, но вряд ли они окажутся серьезными и уж точно не заставят вас отказаться от задуманного.',
    'Полезной будет поддержка близких, которую вы наверняка получите вовремя. Это подходящий день для того, чтобы укрепить семейные отношения. Удастся разобраться в каких-то неоднозначных ситуациях прошлого, разногласия будут забыты.'
]