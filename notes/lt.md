# Kas naujo „Cops & Criminals“

Trumpai ir paprastai. Naujausios naujienos – viršuje. (Versijų numeriai – skliaustuose.)

## 🗺️ Žemėlapis, kuris turi prasmę (72)
- **Piktogramos, tinkančios vietai.** Fikseris – žvaigždė, juodoji rinka – kaukė, plovimo priedangos rodo grynuosius, automobilių eksportas – automobilį, laukai – lapą, žolės parduotuvės – lapą ant namo, nardymo vietos – narovo kaukę, užstato biuras – užstato piktogramą, taksofonas – telefoną. Užimamas rajonas – karūna, o gaujos būstinė – klubo namai (abu buvo tos pačios dvi kaukolės, vienos ant kitų). „Dark Web“ užsakymas, premija už galvą ir samdomo žudiko biuras dabar trys skirtingos piktogramos (visos trys buvo ta pati kaukolė).
- **Tie patys dalykai vienoje eilutėje.** Žemėlapio legenda „Miesto kamera“ išvardija vieną kartą, o ne dvylika kartų su vieta, ir taip pat greičio kameras, narkotikų kampus, nardymo vietas, rifus, policijos nuovadas ir skrydžius. Kameros žemėlapyje rodomos tik tada, kai esate per 300 metrų.
- **Tik tiems, kam skirta.** Juodoji rinka, Fikseris, slėptuvės, plovimo priedangos, automobilių eksportas, laužo supirkėjas, Pay 'n' Spray, kartelis, taksofonas ir žolės parduotuvės rodomos tik tų darbų, kurie užsiima nusikaltimais, žemėlapyje: ne policijos, medikų ar taksistų. Keliai prisijungti prie darbo lieka kiekvieno žemėlapyje. Taksistas mato visus aštuonis taksi biurus, visi kiti – tik pirmąjį.
- **Keturi užimami rajonai persikėlė** toliau nuo pačių gaujų teritorijų (jie stovėjo ant Ballas ir Lost būstinių): La Puerta, Elysian sala, West Vinewood ir Grapeseed.
- Serverių savininkams: `/blips` (F8) parodo, kas yra žemėlapyje pagal piktogramą, o `Config.Blips.tidy` paslepia, pakeičia ar palieka tik tam tikriems darbams kitų skriptų žymeklius (garažus, drabužių parduotuves...). Kiekviena piktograma yra `Config.Blips.kinds`.
- Serverių savininkams, kaip įdiegti šią versiją: `install_windows.bat` (serveris gali veikti), tada kitas paleidimas iš naujo įkelia viską. `update_live` ir `/cyupdate` įkelia cy-cnc ir policijos nuovadas; taksi biurai, premijos piktograma ir automobilių salono spalva ateina su kitu paleidimu iš naujo.

## 🌆 Miestas atsimuša, kuria savo nusikaltimus ir sako, ko reikia (71)
- **Miesto karštis.** Kuo daugiau nusikaltimų, tuo stipriau miestas atsimuša: nuo ramaus miesto iki patrulių ir užtvarų, policijos sraigtasparnio ir karantino, kai visi būriai gatvėse. Kortelė ekrano viršuje parodo, kad miestas įkaitęs, o apie tai praneša ir Skubios naujienos. Kai ramu, jis aprimsta, o žvaigždutės nyksta lėčiau, kol jis karštas. `/cncheat` (administratoriai) jį nustato; `Config.CityHeat` turi lygius.
- **Miestas kuria savo nusikaltimus**, kai ieškomų žaidėjų mažai: ginkluotas apiplėšimas parduotuvėje, automobilio vagystė kelyje, du besipešantys žmonės, kažkas guli sužeistas. Jie policijai ir medikams ateina kaip 911 iškvietimai su žymekliu. Pirmasis atvykęs atgaivina sceną; įtariamieji bėga, važiuoja arba kovoja, o užspeisti ar į juos nutaikius pasiduoda. Paspauskite E ties sustojusiu įtariamuoju, kad jį suimtumėte, arba ties pacientu, kad jį gydytumėte. Kai iškvietimas uždaromas, visi to darbo žmonės, kurie atvyko, gauna atlygį ir XP. `Config.CityCrime`.
- **Kiekvienas darbas sako, ko jam reikia ir kur tai gauti.** Union Depository apiplėšimas, pabėgimas iš kalėjimo ir Gruppe Sechs sunkvežimio apiplėšimas iš tolo rodo kortelę su kiekvienu reikalingu daiktu, pažymėtu varnele ar kryžiuku, ir kur rasti trūkstamus (juodoji rinka su miesto lygiu, kontrabandos ar atsargų numetimas, terminalas, dirbtuvės). Vieta lieka užrakinta, kol nešiojatės viską, ko reikia. Union Depository vartai neatsidarys, kol komanda kartu nenešios termito, nešiojamo kompiuterio ir grąžto (anksčiau tai paaiškėdavo 2 ir 3 etape, kai laikrodis jau eidavo). Sutarties kortelė rodo, ką dar reikia atnešti. Dueto darbo daiktas turi būti pas partnerį, kuriam ta dalis skirta. F4 > Vietos sąraše yra apiplėšimas ir pabėgimas iš kalėjimo; katalizatoriaus įrašas ten pilkas, su nuoroda, kur gauti metalo pjūklą.
- **Fotografavimo etapai veikia.** „Nufotografuokite, kur jie sustoja“ ir kiti samdomų žudikų bei reporterių fotografavimo etapai: fotografuokite iki 20 metrų atstumu, su E arba telefono kamera, ir kortelė tai pasako. Namo adresas, kuris buvo name viduje (niekas negali įeiti), perkeltas į gatvę priešais.
- Streso ir ištvermės apskritimai rodomi tik tada, kai tai svarbu (stresas didesnis už nulį, pavargęs žaidėjas). Taip pat ir šarvų apskritimas. Tai, ką pats įjungei HUD meniu, lieka.
- Serverių savininkams: `install_windows.bat` dabar veikia, kai serveris veikia. Jis įdiegia, o viskas įsikelia kitą kartą paleidus serverį (užtenka txAdmin suplanuoto paleidimo iš naujo), nieko stabdyti nereikia. `/cyupdate` vis dar iškart įkelia gyvuosius išteklius.
- Serverių savininkams, kaip įdiegti šią versiją: `install_windows.bat` (serveris gali veikti), tada kitas paleidimas iš naujo įkelia viską. Be paleidimo iš naujo `update_live` ir `/cyupdate` įkelia viską, išskyrus telefono kameros dalį (qb-phone) ir kitų skriptų daiktų užuominas.

## 🎒 Naudojami daiktai, tikri paveikslėliai, sąžiningos dalybos (70)
- Dabar kiekvieną mūsų daiktą galima naudoti iš inventoriaus. Bankomato įsilaužimo rinkinys įsilaužia į bankomatą, prie kurio stovi (anksčiau nieko nevykdavo), plastikiniai antrankiai surakina žmogų šalia tavęs pakeltomis rankomis, pjūklelis išpjauna katalizatorių iš pastatyto automobilio, ietis gaudo žuvį prie rifo, hakerio nešiojamas kompiuteris atidaro jo meniu. Visa kita pasako, kam skirta ir kur nunešti.
- Kiekvienas mūsų daiktas turi tikrą paveikslėlį: paties daikto piešinį, o ne piktogramą ant tamsios plytelės. Pelkės kailiai, mėsa, žolės, batai ir tonikas jį turi pirmą kartą.
- Apiplėškite parduotuvę kartu: kasos, seifo ir pardavėjo pinigai lygiai padalijami visiems parduotuvėje, kurie užsiima nusikaltimais (tavo grupei ar bet kam kitam ten). Policija ir medikai nieko negauna. `Config.CrewShare` nustato atstumą ir kas skaičiuojamas.
- Gėrimai praeina dvigubai greičiau (apie 10 minučių nuo visiškai girto iki blaivaus), o sąmonės netekimas trunka 15 sekundžių. Kokainas, krekas, ekstazis ir metamfetaminas dabar trunka tiksliai tiek, kiek rodo atgalinis skaičiavimas: 20, 15, 20 ir 15 sekundžių (krekas anksčiau tęsėsi minutę). Viskas `Config.Drunk`.
- Sveikatos apskritimas pasiekia pilną kiekvienam veikėjui (moteris sustodavo ties 75%), o balso apskritimas rodo, kokiu nuotoliu kalbi. `/hudcheck` (F8) parodo skaičius už apskritimų.
- Bankomato įsilaužimas sako „Atsistok tiesiai prie aparato.“, o ne nieko, kai esi per toli.
- Serverio savininkams, kaip įdiegti šią versiją: `install_windows.bat`, kai serveris išjungtas. (`update_live` tinka daugumai, bet daiktų paveikslėliai, kasos ar seifo dalybos ir narkotikų trukmė yra qb-inventory, qb-storerobbery ir qb-smallresources, kurie keičiasi tik perkrovus.)

## 🕵️ Nusikaltimai be budinčios policijos, atgalinis skaičiavimas ir Kas naujo (69)
- Parduotuves, bankomatus ir namus galima apiplėšti net kai nėra budinčio policininko žaidėjo, todėl civilis gali tai daryti ir tyliame serveryje. Žvaigždes ir policijos iškvietimą vis tiek gauni, o NPC policija vis tiek atvyksta. Bankams, juvelyrinei parduotuvei, šarvuotam furgonui ir didiesiems apiplėšimams vis dar reikia budinčios policijos.
- Girtas ar apsvaigęs: kortelė ekrano viršuje skaičiuoja laiką, kol tai praeis (netekus sąmonės – kol atsigausi). Kokainas, krekas, ekstazis ir metamfetaminas taip pat gauna kortelę, o kita dozė prideda laiko.
- F4 > Pagalba > **Kas naujo**: naujausi pakeitimai paprastais žodžiais, tavo kalba. Taškas rodomas ant Pagalbos, kol pamatysi naujausius.
- Serverio savininkams: viskas, kas yra `scripts`, dabar veikia ir Debian (bei kituose Linux): `update_live.sh`, `discord_setup.sh` ir `export_reports.sh` prisijungia prie `install_linux.sh`, `backup_linux.sh` ir `restore_linux.sh`. Kiekvienas atsako į `--help`.
- Serverio savininkams, kaip įdiegti šią versiją: pakanka `update_live`. Pačių parduotuvių policijos minimumas (qb-storerobbery konfigūracijos pataisa) ir rezultatų lentelė įsigalioja po kito serverio perkrovimo arba iš karto su `/cyupdate force`.

## 🗺️ Z – žemėlapiui, ir ką pranešė žaidėjai (68)
- **Z** padidina mini žemėlapį, paspaudus dar kartą – dar labiau, ir dar kartą – grąžina, kaip GTA Online. Jūsų City Pass kortelė (su XP juosta) perkelta į **U**; laikykite U, kad pamatytumėte žaidėjų sąrašą. Abu klavišus galima pakeisti Settings > Key Bindings > FiveM.
- Gaujų pagarbos skydelis nebėra ekrane visą laiką: jis pasirodo kelioms sekundėms, kai keičiasi jūsų pagarba, ir tik tos gaujos eilutė, kol esate jos teritorijoje. `/ganghud` perjungia tarp šio režimo, visada rodomo ir išjungto.
- Jūros ir paplūdimio garsai daug tylesni (GTA ten groja ir savo bangas), o miesto garsai naujiems žaidėjams prasideda tyliau. `/sound` nustato juos kaip norite.
- Saugi zona prie Pillbox nebėra žalias diskas, kabantis virš gatvių: jos kraštas – žymeklių žiedas, stovintis ant žemės.
- Serverio savininkams: `scripts\export_reports.bat` sudeda visus pranešimus apie klaidas, skundus ir užklausas į vieną failą, kurį galima perskaityti ar perduoti.
- Serverio savininkams: paleidžiami failai (diegimas, tiesioginis atnaujinimas, atsarginė kopija, atkūrimas, Discord sąranka, pranešimai) dabar kartu atsisiuntimo aplanke **scripts**, pavyzdžiui `scripts\install_windows.bat`.
- Serverio savininkams, kaip įdiegti šią versiją: nuo 67 versijos pakanka `update_live`; saugios zonos žiedas laukia kito serverio paleidimo iš naujo. Nuo 66 ar senesnės – `install_windows.bat` su sustabdytu serveriu (67 versija pakeitė veikėjo pasirinkimą, kuris niekada neperkraunamas veikiant).

## 🍸 Gėrimai, kurie svaigina, ir pataisymai (67)
- Veikėjo pasirinkime nuo 64 versijos nebuvo pelės žymeklio. Jis vėl yra.
- Telefono kamera veikia: nuotraukos išsaugomos Discord kanale #phone-photos (tik komandai), ir žaidėjams neperduodama nieko, kuo būtų galima rašyti į jūsų Discord. Serverio savininkams: dar kartą paleiskite discord_setup.bat, kad būtų pridėtas kanalas.
- Dingo dvi konsolės klaidos: viena, kai prisijungia žaidėjas be susieto Discord, ir „Missing phrase for key: info.house“ iš garažų.
- Keli žaidėjai viename automobilyje: jų vardai buvo rodomi vienas ant kito. Dabar jie stovi stulpeliu virš automobilio, vairuotojas viršuje.
- Policijos meniu: paspaudus informacinę eilutę („Suspect must be on foot“, „Handcuff the suspect before arresting“, „Nothing found“) nebėra klaidos; šios eilutės dabar nėra mygtukai.
- Pokalbis nebeužstringa: užrakinus automobilį su L pokalbis nebeslepiamas ir nebeprikalamas prie ekrano (dabar tai `/chatview`), o jei kitas langas paima klaviatūrą jums rašant, pokalbio laukelis užsidaro pats ir T vėl jį atidaro su tuo, ką parašėte.
- Gėrimas svaigina: alus, viskis ir degtinė sumuojasi. Dvi degtinės, ir einate girtas, ekranas plaukia, suklumpate, o automobilis traukia į šoną; trys, ir vos stovite; keturios, ir netenkate sąmonės ten, kur esate. Tai praeina savaime.

## 🚓 Palydos užduotys (66)
- Penkios sutartys dabar duoda tikrą žmogų, kurį reikia palydėti: **kalinį** į Bolingbroke (policija), **VIP** į viešbutį ir **liudininką** į Mission Row (policija), **pacientą** į Pillbox (medikai) ir **gaujos narį** į slėptuvę (gatvė).
- Žingsnis po žingsnio: paspauskite **E** šalia jo, kad jį paimtumėte (kalinys surakintas ir vedamas už rankos), **E** prie automobilio galinių durų, kad jį pasodintumėte (arba tiesiog įlipkite ir jis įlips paskui), važiuokite, **E** prie jo durų, kad jį išleistumėte, tada nuveskite jį prie durų ir paspauskite **E**. Užduoties kortelė rodo, kuriame žingsnyje esate.

## 🖼️ Tikri daiktų paveikslėliai (65)
- Daiktai, pavyzdžiui, kepimo soda, dabar rodo tikrą paveikslėlį iš serverio paveikslėlių paketo, jei jame toks yra, kaip ir visas inventorius. Mūsų nupieštas ženkliukas rodomas tik tada, kai tikro paveikslėlio nėra.

## ✨ Sklandesnis atvykimas (64)
- Jūsų automobilis iš F4 > Garažas > Pristatymas dabar atvažiuoja atsisukęs į jus. Vairuotojui nebereikia jo pirma apsukti.
- Prisijungiant: nebeblyksi keistas `{{ ... }}` tekstas juodame ekrane per įkėlimo ekraną, ir žaidimas nebešmėkšteli prieš veikėjo pasirinkimą.
- Kepimo soda inventoriuje dabar turi tikrą paveikslėlį (atrodė, lyg paveikslėlio trūktų).

## 🩺 Ieškome, kas užlaužia žaidimą (63)
- Jei žaidimas užlūžta žaidžiant, serveris dabar užsirašo, kokiame automobilyje buvote, kad komanda rastų sugedusį automobilį. Serverio savininkams: diegimo programa taip pat parodo papildomus automobilius, kurie konfliktuoja tarpusavyje (dažna užlūžimo vairuojant priežastis).

## 🔄 Atnaujinimai be perkrovimo (62)
- Automobilio radijas: vėl galite jį išjungti ir keisti stotis GTA ratu (Q). Jis grojo ir jo nebuvo galima pakeisti — pataisyta.
- Serverio savininkams: nauja versija įdiegiama, kol žmonės žaidžia. Paleiskite `update_live.bat`, tada administratorius įveda `/cyupdate`: visi gauna 20 sekundžių įspėjimą ir persikrauna tik tai, kas pasikeitė. Jūs liekate žaidime. Žr. docs/LIVE-UPDATE.md.
- Žaidėjams, kurie vis atsijungdavo (timed out) jungdamiesi: prisijungiant siunčiama mažiau, o konsolė parodo, ko laukė atsijungęs žaidėjas, kad būtų galima tai pataisyti.

## 🔧 Sklandžiau ir keli pataisymai (61)
- Automobilio radijas vėl yra GTA radijas su savo stočių ratu. (Mūsų sukurta muzika dabar išjungta; serverio nustatymas ją grąžina.)
- Programišiai: jūsų Null Sector sutartys ir dienos užduotys dabar yra tiesiai nešiojamajame (Sutartys, Šios dienos užduotys), taip pat F6 ir F7. Nauja: /cncwhoami parodo jūsų darbą ir kas siūloma.
- GMP: „Masinės nelaimės“ sužeistieji ir „Kraujo pervežimo“ šaldytuvai nebelieka už prekystalio ar ant atbrailos — jie pertempiami ten, kur galite pasiekti. Tai pataiso ir įstrigusias vietas kitose užduotyse.
- „Discord“ eilutė „Prisijungti“ neberodo sugadinto adreso, o „Discord“ nuorodą F4 > Pagalba galima tinkamai nustatyti (sąrankos įrankis ją įrašo).
- Po gaubtu: lengvesnis žaidėjų sąrašas ir keli maži atminties nutekėjimai užtaisyti. Žr. docs/PERFORMANCE-AUDIT.md.

## 📺 Tiesioginė transliacija ekrane (60)
- Administratoriai gali parodyti tiesioginę transliaciją visų ekranuose: mažą kvadratą viršuje kairėje su „YouTube“, „Twitch“ ar „Kick“ transliacija. Ji išjungta, kol administratorius jos neįjungia (`/cnclive`).
- Nenorite jos? `/live` ją jums paslepia. `/live sound` įjungia garsą, `/live size` ją padidina.

## 💬 Miestas „Discord“ (59)
- Serveris dabar turi „Discord“. Ten esanti žinutė pati rodo, ar miestas atviras, kiek žaidžia ir kaip prisijungti.
- Reikia pagalbos? Parašykite `/ticket` ir ko jums reikia, arba `/bug` ir kas nutiko. Komanda atsako per „Discord“, o jūs atsakymą skaitote žaidime, net jei buvote atsijungę: jį gausite kitą kartą žaisdami. `/tickets` parodo jūsų užklausas.
- Pranešimai per F4 komandą pasiekia taip pat.
- Serverio savininkams: vieną kartą paleiskite `discord_setup.bat` ir įklijuokite boto raktą (token). Jis sukuria kanalus, roles ir pasisveikinimo tekstus bei prijungia serverį. Žr. `docs/DISCORD.md`.

## 🧭 Daugiau darbų, po vieną sustojimą (58)
- Kiekvienas darbas dabar turi apie dešimt užduočių, o po kiekvieno paleidimo siūlomos tik kelios, todėl kiekvieną dieną matysite skirtingas.
- Darbas su keliais sustojimais rodo tik tą, kuriame esate. Kitas atsiranda, kai baigiate.
- Programišius turi savo užsakymus ir dienos užduotis, o nešiojamasis atidaro bankomatus.
- Atlikite visas dienos užduotis ir gaukite premiją, kuri keičiasi kasdien: pinigai, daiktai ar patirtis.
- Iš oro uosto kasos galima skristi į Sandy Shores aerodromą, o krovininio skrydžio darbe dabar parašyta, kad lėktuvą vairuojate patys.
- Degalinių pardavėjai, stovėję prie kolonėlių, dingo: pardavėjai lieka parduotuvėse.

## 🎶 Miesto garsai (57)
- Automobilio radijas su keturiomis stotimis, kurias žaidimas sukuria pats: synthwave, Floridos repas ir dvi lotyniškos. Visi mašinoje girdi tą pačią dainą. Klavišai: **.** kita, **,** atgal, **/** išjungti.
- Sirenos, kurių tonas keičiasi joms pravažiuojant, ir vietos garsai: paplūdimys, pelkė, dykuma, miestas. Komanda **/sound** nustato, kaip garsiai skamba kiekvienas.
- Muzika įkėlimo ekrane ir nauja piktograma serverių sąraše.
- Felčeriai ir ugniagesiai turi savo užduotis. Policininkai, felčeriai ir ugniagesiai mato nusikaltimų meniu, bet negali jo naudoti.
- Kalėjimo laikas sumažintas perpus: kiekviena bausmė dvigubai trumpesnė.
- Tiekimo numetimai: dėžė dabar atitinka savo dydį: mažas numetimas – maža dėžutė, didelis – didelė dėžė.
- Ištaisyta klaida įvedant radijo kanalą „qb-radio“.
- Serverių savininkams: nauji atsarginių kopijų ir atkūrimo scenarijai bei `install_linux.sh` Linux kompiuteriui. Žr. `docs/BACKUP-AND-NEW-MACHINE.md`.

## 🛡️ Saugesnis miestas (56)
- Nebegalima apsimesti, kad plėšimas vyksta toli, ir taip gauti patirties (XP) ar pinigų.
- Svetimas žmogus nebegali išmesti jūsų iš mašinos. Iš automobilio galima ištraukti tik surakintą, surištą, parkritusį arba rankas pakėlusį žmogų.
- Serverių savininkams: pranešimų „webhook“ adresai perkelti į `server.cfg`, kad žaidėjai jų neperskaitytų. Nauji įrankiai serveriui patikrinti prieš sukčiautojus – `docs/SECURITY-TESTING.md`.

## 🧰 Jūsų darbas, jūsų užsakymai (55)
- Paspauskite **F6 > Contracts** ir matysite **savo profesijos** darbus: taksi, mechanikas, evakuatorius, šiukšlių surinkimas, sunkvežimio vairuotojas, reporteris, samdomas žudikas, policininkas, felčeris.
- 17 naujų darbų, visi mokami švariais pinigais.
- Nusikaltimų darbai rodomi tik tiems, kas užsiima nusikaltimais.

## 🏁 Purvo klubas (54)
- Laiko varžybos, lenktynės su lažybomis, važiavimas per purvą ir dalys motociklams, keturračiams ir bagiams – dykumoje.
- Vyras prieplaukoje ir vyras medžioklės namelyje dabar stovi prie savo stalų.

## 🐊 Pelkė ir gaujų teritorijos (53)
- Medžioklės namelis prie Alamo jūros: leidimas, oro valtys, gyvūnai, žolelės, batai ir gėrimas.
- Jūsų nekenčianti gauja gali uždaryti savo teritoriją. Nusipirkite leidimą iš vado ir įeikite saugiai. Smūgis gaujos nariui dabar kainuoja pagarbą.

## 🌊 Prieplauka (52)
- Nuomokite valtis, nardykite ieškodami radinių, žvejokite su žeberklu, gabenkite dėžes valtimi.
- Kai jus suima, asmens kortelė, pažymėjimai ir telefonas lieka su jumis.

## 🤝 Bonis ir Klaidas (51)
- Du žaidėjai gali susijungti į porą: bendri įgūdžiai, bendra slėptuvė ir trys apiplėšimai dviem.

## 🕶️ Tamsusis internetas (50)
- Iš telefono galite slapta paskelbti kainą už žmogų. Samdomi žudikai gauna įgūdžių, duslintuvus ir tvirtinamą lyną.

## 📱 CyPhone ir Clout (49)
- Telefono programėlė ir trumpų vaizdo įrašų srautas. Transliuokite gyvai, padarykite ką nors šaunaus ir gaukite sekėjų. Šlovė atveria ypatingus darbus.

## 🌍 Keturios kalbos (43-48)
- Anglų, hebrajų, lietuvių ir arabų. Pasirenkama vieną kartą, įkrovimo ekrane.
- Naujas kalėjimo vaizdas ir žemėlapio ženklai. Veikėjų ekranas taip pat jūsų kalba.

## 🚓 Policininkai ir nusikaltėliai, anksčiau (24-42)
- Naujas pokalbių langas, nauji pranešimai, užsakymai su komanda, gebėjimai, baudos, greičio ir miesto kameros, parduotuvių apiplėšimai, narkotikų pardavėjo darbas, pagarba gaujose, miesto ekskursija, naujas veikėjų ekranas, programišiaus darbas, o policininkus ir medikus valdo žaidimas, kai nėra budinčio žaidėjo.

## 🔜 Netrukus
- „Discord“ serveris, rodantis, kas prisijungęs, ir priimantis užklausas bei pranešimus apie klaidas, bei mažas tiesioginės transliacijos langelis ekrane.

## 🧑‍🔧 Serverių savininkams: kaip atnaujinti
1. Atsisiųskite naujausius failus ir **sustabdykite** žaidimo serverį.
2. Paleiskite `install_windows.bat`. Pirmoje eilutėje matysite versiją, o viską, ką pakeičia, jis pirmiau išsaugo kopijoje.
3. Vėl paleiskite serverį. `README.md` paaiškina, ką daryti, jei sąraše kas nors geltona.

*Vertimai – pirmieji juodraščiai be gimtakalbio peržiūros: pasakykite, kas skamba neteisingai.*
