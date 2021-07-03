import { Candle } from "../../entities/candle";

export type ExchangeInterval = "12h" | "15m" | "1d" | "1h" | "1m" | "2h" | "30m" | "3m" | "4h" | "5m" | "6h" | "8h";
export type ExchangePair = "1INCHBTC" | "1INCHBUSD" | "1INCHDOWNUSDT" | "1INCHUPUSDT" | "1INCHUSDT" | "AAVEBKRW" | "AAVEBNB" | "AAVEBTC" | "AAVEBUSD" | "AAVEDOWNUSDT" | "AAVEETH" | "AAVEUPUSDT" | "AAVEUSDT" | "ACMBTC" | "ACMBUSD" | "ACMUSDT" | "ADAAUD" | "ADABKRW" | "ADABNB" | "ADABRL" | "ADABTC" | "ADABUSD" | "ADADOWNUSDT" | "ADAETH" | "ADAEUR" | "ADAGBP" | "ADAPAX" | "ADARUB" | "ADATRY" | "ADATUSD" | "ADAUPUSDT" | "ADAUSDC" | "ADAUSDT" | "ADXBNB" | "ADXBTC" | "ADXETH" | "AEBNB" | "AEBTC" | "AEETH" | "AERGOBTC" | "AERGOBUSD" | "AGIBNB" | "AGIBTC" | "AGIETH" | "AIONBNB" | "AIONBTC" | "AIONBUSD" | "AIONETH" | "AIONUSDT" | "AKROBTC" | "AKROUSDT" | "ALGOBNB" | "ALGOBTC" | "ALGOBUSD" | "ALGOPAX" | "ALGOTUSD" | "ALGOUSDC" | "ALGOUSDT" | "ALICEBTC" | "ALICEBUSD" | "ALICEUSDT" | "ALPHABNB" | "ALPHABTC" | "ALPHABUSD" | "ALPHAUSDT" | "AMBBNB" | "AMBBTC" | "AMBETH" | "ANKRBNB" | "ANKRBTC" | "ANKRPAX" | "ANKRTUSD" | "ANKRUSDC" | "ANKRUSDT" | "ANTBNB" | "ANTBTC" | "ANTBUSD" | "ANTUSDT" | "APPCBNB" | "APPCBTC" | "APPCETH" | "ARDRBNB" | "ARDRBTC" | "ARDRETH" | "ARDRUSDT" | "ARKBTC" | "ARKETH" | "ARNBTC" | "ARNETH" | "ARPABNB" | "ARPABTC" | "ARPAUSDT" | "ASRBTC" | "ASRUSDT" | "ASTBTC" | "ASTETH" | "ATMBTC" | "ATMUSDT" | "ATOMBNB" | "ATOMBTC" | "ATOMBUSD" | "ATOMPAX" | "ATOMTUSD" | "ATOMUSDC" | "ATOMUSDT" | "AUCTIONBTC" | "AUCTIONBUSD" | "AUDBUSD" | "AUDIOBTC" | "AUDIOBUSD" | "AUDIOUSDT" | "AUDUSDT" | "AUTOBTC" | "AUTOBUSD" | "AUTOUSDT" | "AVABNB" | "AVABTC" | "AVABUSD" | "AVAUSDT" | "AVAXBNB" | "AVAXBTC" | "AVAXBUSD" | "AVAXEUR" | "AVAXTRY" | "AVAXUSDT" | "AXSBNB" | "AXSBTC" | "AXSBUSD" | "AXSUSDT" | "BADGERBTC" | "BADGERBUSD" | "BADGERUSDT" | "BAKEBNB" | "BAKEBUSD" | "BAKEUSDT" | "BALBNB" | "BALBTC" | "BALBUSD" | "BALUSDT" | "BANDBNB" | "BANDBTC" | "BANDBUSD" | "BANDUSDT" | "BARBTC" | "BARBUSD" | "BARUSDT" | "BATBNB" | "BATBTC" | "BATBUSD" | "BATETH" | "BATPAX" | "BATTUSD" | "BATUSDC" | "BATUSDT" | "BCCBNB" | "BCCBTC" | "BCCETH" | "BCCUSDT" | "BCDBTC" | "BCDETH" | "BCHABCBTC" | "BCHABCBUSD" | "BCHABCPAX" | "BCHABCTUSD" | "BCHABCUSDC" | "BCHABCUSDT" | "BCHABUSD" | "BCHBNB" | "BCHBTC" | "BCHBUSD" | "BCHDOWNUSDT" | "BCHEUR" | "BCHPAX" | "BCHSVBTC" | "BCHSVPAX" | "BCHSVTUSD" | "BCHSVUSDC" | "BCHSVUSDT" | "BCHTUSD" | "BCHUPUSDT" | "BCHUSDC" | "BCHUSDT" | "BCNBNB" | "BCNBTC" | "BCNETH" | "BCPTBNB" | "BCPTBTC" | "BCPTETH" | "BCPTPAX" | "BCPTTUSD" | "BCPTUSDC" | "BEAMBNB" | "BEAMBTC" | "BEAMUSDT" | "BEARBUSD" | "BEARUSDT" | "BELBNB" | "BELBTC" | "BELBUSD" | "BELUSDT" | "BETHETH" | "BGBPUSDC" | "BIFIBNB" | "BIFIBUSD" | "BKRWBUSD" | "BKRWUSDT" | "BLZBNB" | "BLZBTC" | "BLZBUSD" | "BLZETH" | "BLZUSDT" | "BNBAUD" | "BNBBEARBUSD" | "BNBBEARUSDT" | "BNBBIDR" | "BNBBKRW" | "BNBBRL" | "BNBBTC" | "BNBBULLBUSD" | "BNBBULLUSDT" | "BNBBUSD" | "BNBDAI" | "BNBDOWNUSDT" | "BNBETH" | "BNBEUR" | "BNBGBP" | "BNBIDRT" | "BNBNGN" | "BNBPAX" | "BNBRUB" | "BNBTRY" | "BNBTUSD" | "BNBUAH" | "BNBUPUSDT" | "BNBUSDC" | "BNBUSDS" | "BNBUSDT" | "BNBZAR" | "BNTBTC" | "BNTBUSD" | "BNTETH" | "BNTUSDT" | "BOTBTC" | "BOTBUSD" | "BQXBTC" | "BQXETH" | "BRDBNB" | "BRDBTC" | "BRDETH" | "BTCAUD" | "BTCBBTC" | "BTCBIDR" | "BTCBKRW" | "BTCBRL" | "BTCBUSD" | "BTCDAI" | "BTCDOWNUSDT" | "BTCEUR" | "BTCGBP" | "BTCIDRT" | "BTCNGN" | "BTCPAX" | "BTCRUB" | "BTCSTBTC" | "BTCSTBUSD" | "BTCSTUSDT" | "BTCTRY" | "BTCTUSD" | "BTCUAH" | "BTCUPUSDT" | "BTCUSDC" | "BTCUSDS" | "BTCUSDT" | "BTCVAI" | "BTCZAR" | "BTGBTC" | "BTGBUSD" | "BTGETH" | "BTGUSDT" | "BTSBNB" | "BTSBTC" | "BTSBUSD" | "BTSETH" | "BTSUSDT" | "BTTBNB" | "BTTBRL" | "BTTBTC" | "BTTBUSD" | "BTTEUR" | "BTTPAX" | "BTTTRX" | "BTTTRY" | "BTTTUSD" | "BTTUSDC" | "BTTUSDT" | "BULLBUSD" | "BULLUSDT" | "BURGERBNB" | "BURGERBUSD" | "BURGERUSDT" | "BUSDBIDR" | "BUSDBKRW" | "BUSDBRL" | "BUSDBVND" | "BUSDDAI" | "BUSDIDRT" | "BUSDNGN" | "BUSDRUB" | "BUSDTRY" | "BUSDUSDT" | "BUSDVAI" | "BUSDZAR" | "BZRXBNB" | "BZRXBTC" | "BZRXBUSD" | "BZRXUSDT" | "CAKEBNB" | "CAKEBTC" | "CAKEBUSD" | "CAKEGBP" | "CAKEUSDT" | "CDTBTC" | "CDTETH" | "CELOBTC" | "CELOUSDT" | "CELRBNB" | "CELRBTC" | "CELRUSDT" | "CFXBTC" | "CFXBUSD" | "CFXUSDT" | "CHATBTC" | "CHATETH" | "CHRBNB" | "CHRBTC" | "CHRUSDT" | "CHZBNB" | "CHZBRL" | "CHZBTC" | "CHZBUSD" | "CHZEUR" | "CHZGBP" | "CHZTRY" | "CHZUSDT" | "CKBBTC" | "CKBBUSD" | "CKBUSDT" | "CLOAKBTC" | "CLOAKETH" | "CMTBNB" | "CMTBTC" | "CMTETH" | "CNDBNB" | "CNDBTC" | "CNDETH" | "COCOSBNB" | "COCOSBTC" | "COCOSUSDT" | "COMPBNB" | "COMPBTC" | "COMPBUSD" | "COMPUSDT" | "COSBNB" | "COSBTC" | "COSUSDT" | "COTIBNB" | "COTIBTC" | "COTIUSDT" | "COVERBUSD" | "COVERETH" | "CREAMBNB" | "CREAMBUSD" | "CRVBNB" | "CRVBTC" | "CRVBUSD" | "CRVUSDT" | "CTKBNB" | "CTKBTC" | "CTKBUSD" | "CTKUSDT" | "CTSIBNB" | "CTSIBTC" | "CTSIBUSD" | "CTSIUSDT" | "CTXCBNB" | "CTXCBTC" | "CTXCUSDT" | "CVCBNB" | "CVCBTC" | "CVCETH" | "CVCUSDT" | "CVPBUSD" | "CVPETH" | "DAIBNB" | "DAIBTC" | "DAIBUSD" | "DAIUSDT" | "DASHBNB" | "DASHBTC" | "DASHBUSD" | "DASHETH" | "DASHUSDT" | "DATABTC" | "DATABUSD" | "DATAETH" | "DATAUSDT" | "DCRBNB" | "DCRBTC" | "DCRBUSD" | "DCRUSDT" | "DEGOBTC" | "DEGOBUSD" | "DEGOUSDT" | "DENTBTC" | "DENTETH" | "DENTUSDT" | "DEXEBUSD" | "DEXEETH" | "DFBUSD" | "DFETH" | "DGBBNB" | "DGBBTC" | "DGBBUSD" | "DGBUSDT" | "DGDBTC" | "DGDETH" | "DIABNB" | "DIABTC" | "DIABUSD" | "DIAUSDT" | "DLTBNB" | "DLTBTC" | "DLTETH" | "DNTBTC" | "DNTBUSD" | "DNTETH" | "DNTUSDT" | "DOCKBTC" | "DOCKETH" | "DOCKUSDT" | "DODOBTC" | "DODOBUSD" | "DODOUSDT" | "DOGEAUD" | "DOGEBNB" | "DOGEBRL" | "DOGEBTC" | "DOGEBUSD" | "DOGEEUR" | "DOGEGBP" | "DOGEPAX" | "DOGERUB" | "DOGETRY" | "DOGEUSDC" | "DOGEUSDT" | "DOTBIDR" | "DOTBKRW" | "DOTBNB" | "DOTBRL" | "DOTBTC" | "DOTBUSD" | "DOTDOWNUSDT" | "DOTEUR" | "DOTGBP" | "DOTNGN" | "DOTTRY" | "DOTUPUSDT" | "DOTUSDT" | "DREPBNB" | "DREPBTC" | "DREPUSDT" | "DUSKBNB" | "DUSKBTC" | "DUSKPAX" | "DUSKUSDC" | "DUSKUSDT" | "EASYBTC" | "EASYETH" | "EDOBTC" | "EDOETH" | "EGLDBNB" | "EGLDBTC" | "EGLDBUSD" | "EGLDEUR" | "EGLDUSDT" | "ELFBTC" | "ELFETH" | "ENGBTC" | "ENGETH" | "ENJBNB" | "ENJBRL" | "ENJBTC" | "ENJBUSD" | "ENJETH" | "ENJEUR" | "ENJGBP" | "ENJUSDT" | "EOSBEARBUSD" | "EOSBEARUSDT" | "EOSBNB" | "EOSBTC" | "EOSBULLBUSD" | "EOSBULLUSDT" | "EOSBUSD" | "EOSDOWNUSDT" | "EOSETH" | "EOSEUR" | "EOSPAX" | "EOSTRY" | "EOSTUSD" | "EOSUPUSDT" | "EOSUSDC" | "EOSUSDT" | "EPSBTC" | "EPSBUSD" | "EPSUSDT" | "ERDBNB" | "ERDBTC" | "ERDBUSD" | "ERDPAX" | "ERDUSDC" | "ERDUSDT" | "ETCBNB" | "ETCBTC" | "ETCBUSD" | "ETCETH" | "ETCPAX" | "ETCTUSD" | "ETCUSDC" | "ETCUSDT" | "ETHAUD" | "ETHBEARBUSD" | "ETHBEARUSDT" | "ETHBIDR" | "ETHBKRW" | "ETHBRL" | "ETHBTC" | "ETHBULLBUSD" | "ETHBULLUSDT" | "ETHBUSD" | "ETHDAI" | "ETHDOWNUSDT" | "ETHEUR" | "ETHGBP" | "ETHNGN" | "ETHPAX" | "ETHRUB" | "ETHTRY" | "ETHTUSD" | "ETHUPUSDT" | "ETHUSDC" | "ETHUSDT" | "ETHZAR" | "EURBUSD" | "EURUSDT" | "EVXBTC" | "EVXETH" | "EZBTC" | "EZETH" | "FETBNB" | "FETBTC" | "FETUSDT" | "FILBNB" | "FILBTC" | "FILBUSD" | "FILDOWNUSDT" | "FILUPUSDT" | "FILUSDT" | "FIOBNB" | "FIOBTC" | "FIOBUSD" | "FIOUSDT" | "FIROBTC" | "FIROETH" | "FIROUSDT" | "FISBTC" | "FISBUSD" | "FISUSDT" | "FLMBNB" | "FLMBTC" | "FLMBUSD" | "FLMUSDT" | "FORBTC" | "FORBUSD" | "FORTHBTC" | "FORTHBUSD" | "FORTHUSDT" | "FRONTBTC" | "FRONTBUSD" | "FRONTETH" | "FTMBNB" | "FTMBTC" | "FTMPAX" | "FTMTUSD" | "FTMUSDC" | "FTMUSDT" | "FTTBNB" | "FTTBTC" | "FTTUSDT" | "FUELBTC" | "FUELETH" | "FUNBTC" | "FUNETH" | "FUNUSDT" | "FXSBTC" | "FXSBUSD" | "GASBTC" | "GBPBUSD" | "GBPUSDT" | "GHSTBUSD" | "GHSTETH" | "GLMBTC" | "GLMETH" | "GNTBNB" | "GNTBTC" | "GNTETH" | "GOBNB" | "GOBTC" | "GRSBTC" | "GRSETH" | "GRTBTC" | "GRTBUSD" | "GRTETH" | "GRTEUR" | "GRTUSDT" | "GTOBNB" | "GTOBTC" | "GTOETH" | "GTOPAX" | "GTOTUSD" | "GTOUSDC" | "GTOUSDT" | "GVTBTC" | "GVTETH" | "GXSBTC" | "GXSETH" | "GXSUSDT" | "HARDBNB" | "HARDBTC" | "HARDBUSD" | "HARDUSDT" | "HBARBNB" | "HBARBTC" | "HBARBUSD" | "HBARUSDT" | "HCBTC" | "HCETH" | "HCUSDT" | "HEGICBUSD" | "HEGICETH" | "HIVEBNB" | "HIVEBTC" | "HIVEUSDT" | "HNTBTC" | "HNTUSDT" | "HOTBNB" | "HOTBRL" | "HOTBTC" | "HOTBUSD" | "HOTETH" | "HOTEUR" | "HOTTRY" | "HOTUSDT" | "HSRBTC" | "HSRETH" | "ICNBTC" | "ICNETH" | "ICXBNB" | "ICXBTC" | "ICXBUSD" | "ICXETH" | "ICXUSDT" | "IDEXBTC" | "IDEXBUSD" | "INJBNB" | "INJBTC" | "INJBUSD" | "INJUSDT" | "INSBTC" | "INSETH" | "IOSTBNB" | "IOSTBTC" | "IOSTBUSD" | "IOSTETH" | "IOSTUSDT" | "IOTABNB" | "IOTABTC" | "IOTABUSD" | "IOTAETH" | "IOTAUSDT" | "IOTXBTC" | "IOTXETH" | "IOTXUSDT" | "IQBNB" | "IQBUSD" | "IRISBNB" | "IRISBTC" | "IRISBUSD" | "IRISUSDT" | "JSTBNB" | "JSTBTC" | "JSTBUSD" | "JSTUSDT" | "JUVBTC" | "JUVBUSD" | "JUVUSDT" | "KAVABNB" | "KAVABTC" | "KAVAUSDT" | "KEYBTC" | "KEYETH" | "KEYUSDT" | "KMDBTC" | "KMDBUSD" | "KMDETH" | "KMDUSDT" | "KNCBTC" | "KNCBUSD" | "KNCETH" | "KNCUSDT" | "KP3RBNB" | "KP3RBUSD" | "KSMBNB" | "KSMBTC" | "KSMBUSD" | "KSMUSDT" | "LENDBKRW" | "LENDBTC" | "LENDBUSD" | "LENDETH" | "LENDUSDT" | "LINABTC" | "LINABUSD" | "LINAUSDT" | "LINKAUD" | "LINKBKRW" | "LINKBRL" | "LINKBTC" | "LINKBUSD" | "LINKDOWNUSDT" | "LINKETH" | "LINKEUR" | "LINKGBP" | "LINKNGN" | "LINKPAX" | "LINKTRY" | "LINKTUSD" | "LINKUPUSDT" | "LINKUSDC" | "LINKUSDT" | "LITBTC" | "LITBUSD" | "LITUSDT" | "LOOMBNB" | "LOOMBTC" | "LOOMETH" | "LRCBTC" | "LRCBUSD" | "LRCETH" | "LRCUSDT" | "LSKBNB" | "LSKBTC" | "LSKETH" | "LSKUSDT" | "LTCBNB" | "LTCBRL" | "LTCBTC" | "LTCBUSD" | "LTCDOWNUSDT" | "LTCETH" | "LTCEUR" | "LTCGBP" | "LTCNGN" | "LTCPAX" | "LTCRUB" | "LTCTUSD" | "LTCUPUSDT" | "LTCUSDC" | "LTCUSDT" | "LTOBNB" | "LTOBTC" | "LTOUSDT" | "LUNABNB" | "LUNABTC" | "LUNABUSD" | "LUNAEUR" | "LUNAUSDT" | "LUNBTC" | "LUNETH" | "MANABTC" | "MANABUSD" | "MANAETH" | "MANAUSDT" | "MATICBNB" | "MATICBTC" | "MATICBUSD" | "MATICEUR" | "MATICUSDT" | "MBLBNB" | "MBLBTC" | "MBLUSDT" | "MCOBNB" | "MCOBTC" | "MCOETH" | "MCOUSDT" | "MDABTC" | "MDAETH" | "MDTBNB" | "MDTBTC" | "MDTUSDT" | "MFTBNB" | "MFTBTC" | "MFTETH" | "MFTUSDT" | "MIRBTC" | "MIRBUSD" | "MIRUSDT" | "MITHBNB" | "MITHBTC" | "MITHUSDT" | "MKRBNB" | "MKRBTC" | "MKRBUSD" | "MKRUSDT" | "MODBTC" | "MODETH" | "MTHBTC" | "MTHETH" | "MTLBTC" | "MTLETH" | "MTLUSDT" | "NANOBNB" | "NANOBTC" | "NANOBUSD" | "NANOETH" | "NANOUSDT" | "NASBNB" | "NASBTC" | "NASETH" | "NAVBNB" | "NAVBTC" | "NAVETH" | "NBSBTC" | "NBSUSDT" | "NCASHBNB" | "NCASHBTC" | "NCASHETH" | "NEARBNB" | "NEARBTC" | "NEARBUSD" | "NEARUSDT" | "NEBLBNB" | "NEBLBTC" | "NEBLETH" | "NEOBNB" | "NEOBTC" | "NEOBUSD" | "NEOETH" | "NEOPAX" | "NEOTRY" | "NEOTUSD" | "NEOUSDC" | "NEOUSDT" | "NKNBNB" | "NKNBTC" | "NKNUSDT" | "NMRBNB" | "NMRBTC" | "NMRBUSD" | "NMRUSDT" | "NPXSBTC" | "NPXSETH" | "NPXSUSDC" | "NPXSUSDT" | "NULSBNB" | "NULSBTC" | "NULSETH" | "NULSUSDT" | "NXSBNB" | "NXSBTC" | "NXSETH" | "OAXBTC" | "OAXETH" | "OCEANBNB" | "OCEANBTC" | "OCEANBUSD" | "OCEANUSDT" | "OGBTC" | "OGNBNB" | "OGNBTC" | "OGNUSDT" | "OGUSDT" | "OMBTC" | "OMBUSD" | "OMGBNB" | "OMGBTC" | "OMGBUSD" | "OMGETH" | "OMGUSDT" | "OMUSDT" | "ONEBIDR" | "ONEBNB" | "ONEBTC" | "ONEBUSD" | "ONEPAX" | "ONETUSD" | "ONEUSDC" | "ONEUSDT" | "ONGBNB" | "ONGBTC" | "ONGUSDT" | "ONTBNB" | "ONTBTC" | "ONTBUSD" | "ONTETH" | "ONTPAX" | "ONTTRY" | "ONTUSDC" | "ONTUSDT" | "ORNBTC" | "ORNUSDT" | "OSTBNB" | "OSTBTC" | "OSTETH" | "OXTBTC" | "OXTUSDT" | "PAXBNB" | "PAXBTC" | "PAXBUSD" | "PAXETH" | "PAXGBNB" | "PAXGBTC" | "PAXGBUSD" | "PAXGUSDT" | "PAXTUSD" | "PAXUSDT" | "PERLBNB" | "PERLBTC" | "PERLUSDC" | "PERLUSDT" | "PERPBTC" | "PERPBUSD" | "PERPUSDT" | "PHABTC" | "PHABUSD" | "PHBBNB" | "PHBBTC" | "PHBPAX" | "PHBTUSD" | "PHBUSDC" | "PHXBNB" | "PHXBTC" | "PHXETH" | "PIVXBNB" | "PIVXBTC" | "PIVXETH" | "PNTBTC" | "PNTUSDT" | "POABNB" | "POABTC" | "POAETH" | "POEBTC" | "POEETH" | "POLYBNB" | "POLYBTC" | "PONDBTC" | "PONDBUSD" | "PONDUSDT" | "POWRBNB" | "POWRBTC" | "POWRETH" | "PPTBTC" | "PPTETH" | "PROMBNB" | "PROMBUSD" | "PROSETH" | "PSGBTC" | "PSGBUSD" | "PSGUSDT" | "PUNDIXETH" | "PUNDIXUSDT" | "QKCBTC" | "QKCETH" | "QLCBNB" | "QLCBTC" | "QLCETH" | "QSPBNB" | "QSPBTC" | "QSPETH" | "QTUMBNB" | "QTUMBTC" | "QTUMBUSD" | "QTUMETH" | "QTUMUSDT" | "RAMPBTC" | "RAMPBUSD" | "RAMPUSDT" | "RCNBNB" | "RCNBTC" | "RCNETH" | ".." | "RDNBNB" | "RDNBTC" | "RDNETH" | "REEFBTC" | "REEFBUSD" | "REEFUSDT" | "RENBNB" | "RENBTC" | "RENBTCBTC" | "RENBTCETH" | "RENUSDT" | "REPBNB" | "REPBTC" | "REPBUSD" | "REPETH" | "REPUSDT" | "REQBTC" | "REQETH" | "RIFBTC" | "RIFUSDT" | "RLCBNB" | "RLCBTC" | "RLCETH" | "RLCUSDT" | "ROSEBTC" | "ROSEBUSD" | "ROSEUSDT" | "RPXBNB" | "RPXBTC" | "RPXETH" | "RSRBNB" | "RSRBTC" | "RSRBUSD" | "RSRUSDT" | "RUNEBNB" | "RUNEBTC" | "RUNEBUSD" | "RUNEUSDT" | "RVNBNB" | "RVNBTC" | "RVNBUSD" | "RVNTRY" | "RVNUSDT" | "SALTBTC" | "SALTETH" | "SANDBNB" | "SANDBTC" | "SANDBUSD" | "SANDUSDT" | "SCBNB" | "SCBTC" | "SCETH" | "SCRTBTC" | "SCRTETH" | "SCUSDT" | "SFPBTC" | "SFPBUSD" | "SFPUSDT" | "SKLBTC" | "SKLBUSD" | "SKLUSDT" | "SKYBNB" | "SKYBTC" | "SKYETH" | "SLPBUSD" | "SLPETH" | "SLPUSDT" | "SNGLSBTC" | "SNGLSETH" | "SNMBTC" | "SNMETH" | "SNTBTC" | "SNTETH" | "SNXBNB" | "SNXBTC" | "SNXBUSD" | "SNXUSDT" | "SOLBNB" | "SOLBTC" | "SOLBUSD" | "SOLUSDT" | "SPARTABNB" | "SRMBIDR" | "SRMBNB" | "SRMBTC" | "SRMBUSD" | "SRMUSDT" | "STEEMBNB" | "STEEMBTC" | "STEEMETH" | "STMXBNB" | "STMXBTC" | "STMXETH" | "STMXUSDT" | "STORJBTC" | "STORJBUSD" | "STORJETH" | "STORJUSDT" | "STORMBNB" | "STORMBTC" | "STORMETH" | "STORMUSDT" | "STPTBNB" | "STPTBTC" | "STPTUSDT" | "STRATBNB" | "STRATBTC" | "STRATBUSD" | "STRATETH" | "STRATUSDT" | "STRAXBTC" | "STRAXBUSD" | "STRAXETH" | "STRAXUSDT" | "STXBNB" | "STXBTC" | "STXUSDT" | "SUBBTC" | "SUBETH" | "SUNBTC" | "SUNUSDT" | "SUPERBTC" | "SUPERBUSD" | "SUPERUSDT" | "SUSDBTC" | "SUSDETH" | "SUSDUSDT" | "SUSHIBNB" | "SUSHIBTC" | "SUSHIBUSD" | "SUSHIDOWNUSDT" | "SUSHIUPUSDT" | "SUSHIUSDT" | "SWRVBNB" | "SWRVBUSD" | "SXPAUD" | "SXPBIDR" | "SXPBNB" | "SXPBTC" | "SXPBUSD" | "SXPDOWNUSDT" | "SXPEUR" | "SXPGBP" | "SXPTRY" | "SXPUPUSDT" | "SXPUSDT" | "SYSBNB" | "SYSBTC" | "SYSBUSD" | "SYSETH" | "TCTBNB" | "TCTBTC" | "TCTUSDT" | "TFUELBNB" | "TFUELBTC" | "TFUELPAX" | "TFUELTUSD" | "TFUELUSDC" | "TFUELUSDT" | "THETABNB" | "THETABTC" | "THETAETH" | "THETAEUR" | "THETAUSDT" | "TKOBIDR" | "TKOBTC" | "TKOBUSD" | "TKOUSDT" | "TLMBTC" | "TLMBUSD" | "TLMUSDT" | "TNBBTC" | "TNBETH" | "TNTBTC" | "TNTETH" | "TOMOBNB" | "TOMOBTC" | "TOMOBUSD" | "TOMOUSDC" | "TOMOUSDT" | "TRBBNB" | "TRBBTC" | "TRBBUSD" | "TRBUSDT" | "TRIGBNB" | "TRIGBTC" | "TRIGETH" | "TROYBNB" | "TROYBTC" | "TROYUSDT" | "TRUBTC" | "TRUBUSD" | "TRUUSDT" | "TRXAUD" | "TRXBNB" | "TRXBTC" | "TRXBUSD" | "TRXDOWNUSDT" | "TRXETH" | "TRXEUR" | "TRXNGN" | "TRXPAX" | "TRXTRY" | "TRXTUSD" | "TRXUPUSDT" | "TRXUSDC" | "TRXUSDT" | "TRXXRP" | "TUSDBNB" | "TUSDBTC" | "TUSDBTUSD" | "TUSDBUSD" | "TUSDETH" | "TUSDUSDT" | "TVKBTC" | "TVKBUSD" | "TWTBTC" | "TWTBUSD" | "TWTUSDT" | "UFTBUSD" | "UFTETH" | "UMABTC" | "UMAUSDT" | "UNFIBNB" | "UNFIBTC" | "UNFIBUSD" | "UNFIUSDT" | "UNIBNB" | "UNIBTC" | "UNIBUSD" | "UNIDOWNUSDT" | "UNIEUR" | "UNIUPUSDT" | "UNIUSDT" | "USDCBNB" | "USDCBUSD" | "USDCPAX" | "USDCTUSD" | "USDCUSDT" | "USDSBUSDS" | "USDSBUSDT" | "USDSPAX" | "USDSTUSD" | "USDSUSDC" | "USDSUSDT" | "USDTBIDR" | "USDTBKRW" | "USDTBRL" | "USDTBVND" | "USDTDAI" | "USDTIDRT" | "USDTNGN" | "USDTRUB" | "USDTTRY" | "USDTUAH" | "USDTZAR" | "UTKBTC" | "UTKUSDT" | "VENBNB" | "VENBTC" | "VENETH" | "VENUSDT" | "VETBNB" | "VETBTC" | "VETBUSD" | "VETETH" | "VETEUR" | "VETGBP" | "VETTRY" | "VETUSDT" | "VIABNB" | "VIABTC" | "VIAETH" | "VIBBTC" | "VIBEBTC" | "VIBEETH" | "VIBETH" | "VIDTBTC" | "VIDTBUSD" | "VITEBNB" | "VITEBTC" | "VITEUSDT" | "VTHOBNB" | "VTHOBUSD" | "VTHOUSDT" | "WABIBNB" | "WABIBTC" | "WABIETH" | "WANBNB" | "WANBTC" | "WANETH" | "WANUSDT" | "WAVESBNB" | "WAVESBTC" | "WAVESBUSD" | "WAVESETH" | "WAVESPAX" | "WAVESTUSD" | "WAVESUSDC" | "WAVESUSDT" | "WBTCBTC" | "WBTCETH" | "WINBNB" | "WINBRL" | "WINBTC" | "WINEUR" | "WINGBNB" | "WINGBTC" | "WINGBUSD" | "WINGSBTC" | "WINGSETH" | "WINGUSDT" | "WINTRX" | "WINUSDC" | "WINUSDT" | "WNXMBNB" | "WNXMBTC" | "WNXMBUSD" | "WNXMUSDT" | "WPRBTC" | "WPRETH" | "WRXBNB" | "WRXBTC" | "WRXBUSD" | "WRXEUR" | "WRXUSDT" | "WTCBNB" | "WTCBTC" | "WTCETH" | "WTCUSDT" | "XEMBNB" | "XEMBTC" | "XEMETH" | "XEMUSDT" | "XLMBNB" | "XLMBTC" | "XLMBUSD" | "XLMDOWNUSDT" | "XLMETH" | "XLMEUR" | "XLMPAX" | "XLMTRY" | "XLMTUSD" | "XLMUPUSDT" | "XLMUSDC" | "XLMUSDT" | "XMRBNB" | "XMRBTC" | "XMRBUSD" | "XMRETH" | "XMRUSDT" | "XRPAUD" | "XRPBEARBUSD" | "XRPBEARUSDT" | "XRPBKRW" | "XRPBNB" | "XRPBRL" | "XRPBTC" | "XRPBULLBUSD" | "XRPBULLUSDT" | "XRPBUSD" | "XRPDOWNUSDT" | "XRPETH" | "XRPEUR" | "XRPGBP" | "XRPNGN" | "XRPPAX" | "XRPRUB" | "XRPTRY" | "XRPTUSD" | "XRPUPUSDT" | "XRPUSDC" | "XRPUSDT" | "XTZBNB" | "XTZBTC" | "XTZBUSD" | "XTZDOWNUSDT" | "XTZUPUSDT" | "XTZUSDT" | "XVGBTC" | "XVGBUSD" | "XVGETH" | "XVSBNB" | "XVSBTC" | "XVSBUSD" | "XVSUSDT" | "XZCBNB" | "XZCBTC" | "XZCETH" | "XZCUSDT" | "XZCXRP" | "YFIBNB" | "YFIBTC" | "YFIBUSD" | "YFIDOWNUSDT" | "YFIEUR" | "YFIIBNB" | "YFIIBTC" | "YFIIBUSD" | "YFIIUSDT" | "YFIUPUSDT" | "YFIUSDT" | "YOYOBNB" | "YOYOBTC" | "YOYOETH" | "ZECBNB" | "ZECBTC" | "ZECBUSD" | "ZECETH" | "ZECPAX" | "ZECTUSD" | "ZECUSDC" | "ZECUSDT" | "ZENBNB" | "ZENBTC" | "ZENETH" | "ZENUSDT" | "ZILBIDR" | "ZILBNB" | "ZILBTC" | "ZILBUSD" | "ZILETH" | "ZILUSDT" | "ZRXBNB" | "ZRXBTC" | "ZRXBUSD" | "ZRXETH" | "ZRXUSDT";
export type ExchangeName = "Binance";

export interface BinanceCredentials {
  API_KEY: string;
  USER_ID: string;
}

export type ExchangeCredentials = BinanceCredentials;
export interface ExchangeRepository {
  getCandles(sDate: Date, eDate: Date, pair: ExchangePair, interval: ExchangeInterval): Promise<Candle[]>;
  auth(credentials: ExchangeCredentials):Promise<void>;
}