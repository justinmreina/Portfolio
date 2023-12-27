<?php
/** Kazakh (Latin script) (qazaqşa (latın))
 *
 * @file
 * @ingroup Languages
 *
 * @author AlefZet
 * @author Atabek
 * @author GaiJin
 * @author Urhixidur
 */

$fallback = 'kk, kk-cyrl';

$separatorTransformTable = [
	',' => "\u{00A0}",
	'.' => ',',
];

$fallback8bitEncoding = 'windows-1254';

$namespaceNames = [
	NS_MEDIA            => 'Taspa',
	NS_SPECIAL          => 'Arnaýı',
	NS_TALK             => 'Talqılaw',
	NS_USER             => 'Qatıswşı',
	NS_USER_TALK        => 'Qatıswşı_talqılawı',
	NS_PROJECT_TALK     => '$1_talqılawı',
	NS_FILE             => 'Swret',
	NS_FILE_TALK        => 'Swret_talqılawı',
	NS_MEDIAWIKI        => 'MedïaWïkï',
	NS_MEDIAWIKI_TALK   => 'MedïaWïkï_talqılawı',
	NS_TEMPLATE         => 'Ülgi',
	NS_TEMPLATE_TALK    => 'Ülgi_talqılawı',
	NS_HELP             => 'Anıqtama',
	NS_HELP_TALK        => 'Anıqtama_talqılawı',
	NS_CATEGORY         => 'Sanat',
	NS_CATEGORY_TALK    => 'Sanat_talqılawı',
];

$namespaceAliases = [
	# Aliases to kk-cyrl namespaces
	'Таспа'               => NS_MEDIA,
	'Арнайы'              => NS_SPECIAL,
	'Талқылау'            => NS_TALK,
	'Қатысушы'            => NS_USER,
	'Қатысушы_талқылауы'  => NS_USER_TALK,
	'$1_талқылауы'        => NS_PROJECT_TALK,
	'Сурет'               => NS_FILE,
	'Сурет_талқылауы'     => NS_FILE_TALK,
	'МедиаУики'           => NS_MEDIAWIKI,
	'МедиаУики_талқылауы' => NS_MEDIAWIKI_TALK,
	'Үлгі'                => NS_TEMPLATE,
	'Үлгі_талқылауы'      => NS_TEMPLATE_TALK,
	'Анықтама'            => NS_HELP,
	'Анықтама_талқылауы'  => NS_HELP_TALK,
	'Санат'               => NS_CATEGORY,
	'Санат_талқылауы'     => NS_CATEGORY_TALK,

	# Aliases to renamed kk-arab namespaces
	'مەدياۋيكي'        => NS_MEDIAWIKI,
	'مەدياۋيكي_تالقىلاۋى'  => NS_MEDIAWIKI_TALK,
	'ٷلگٸ'        => NS_TEMPLATE,
	'ٷلگٸ_تالقىلاۋى'    => NS_TEMPLATE_TALK,
	'ٴۇلگٴى'              => NS_TEMPLATE,
	'ٴۇلگٴى_تالقىلاۋى'    => NS_TEMPLATE_TALK,

	# Aliases to kk-arab namespaces
	'تاسپا'              => NS_MEDIA,
	'ارنايى'              => NS_SPECIAL,
	'تالقىلاۋ'            => NS_TALK,
	'قاتىسۋشى'          => NS_USER,
	'قاتىسۋشى_تالقىلاۋى' => NS_USER_TALK,
	'$1_تالقىلاۋى'        => NS_PROJECT_TALK,
	'سۋرەت'              => NS_FILE,
	'سۋرەت_تالقىلاۋى'    => NS_FILE_TALK,
	'انىقتاما'            => NS_HELP,
	'انىقتاما_تالقىلاۋى'  => NS_HELP_TALK,
	'سانات'              => NS_CATEGORY,
	'سانات_تالقىلاۋى'    => NS_CATEGORY_TALK,
];

$datePreferences = [
	'default',
	'mdy',
	'dmy',
	'ymd',
	'yyyy-mm-dd',
	'persian',
	'hebrew',
	'ISO 8601',
];

$defaultDateFormat = 'ymd';

$datePreferenceMigrationMap = [
	'default',
	'mdy',
	'dmy',
	'ymd'
];

$dateFormats = [
	'mdy time' => 'H:i',
	'mdy date' => 'xg j, Y "j."',
	'mdy both' => 'H:i, xg j, Y "j."',

	'dmy time' => 'H:i',
	'dmy date' => 'j F, Y "j."',
	'dmy both' => 'H:i, j F, Y "j."',

	'ymd time' => 'H:i',
	'ymd date' => 'Y "j." xg j',
	'ymd both' => 'H:i, Y "j." xg j',

	'yyyy-mm-dd time' => 'xnH:xni:xns',
	'yyyy-mm-dd date' => 'xnY-xnm-xnd',
	'yyyy-mm-dd both' => 'xnH:xni:xns, xnY-xnm-xnd',

	'persian time' => 'H:i',
	'persian date' => 'xij xiF xiY',
	'persian both' => 'xij xiF xiY, H:i',

	'hebrew time' => 'H:i',
	'hebrew date' => 'xjj xjF xjY',
	'hebrew both' => 'H:i, xjj xjF xjY',

	'ISO 8601 time' => 'xnH:xni:xns',
	'ISO 8601 date' => 'xnY-xnm-xnd',
	'ISO 8601 both' => 'xnY-xnm-xnd"T"xnH:xni:xns',
];

/** @phpcs-require-sorted-array */
$magicWords = [
	'anchorencode'              => [ '0', 'JÄKİRDİMUQAMDAW', 'ЖӘКІРДІМҰҚАМДАУ', 'ANCHORENCODE' ],
	'basepagename'              => [ '1', 'NEGİZGİBETATAWI', 'НЕГІЗГІБЕТАТАУЫ', 'BASEPAGENAME' ],
	'basepagenamee'             => [ '1', 'NEGİZGİBETATAWI2', 'НЕГІЗГІБЕТАТАУЫ2', 'BASEPAGENAMEE' ],
	'contentlanguage'           => [ '1', 'MAĞLUMATTİLİ', 'МАҒЛҰМАТТІЛІ', 'CONTENTLANGUAGE', 'CONTENTLANG' ],
	'currentday'                => [ '1', 'AĞIMDAĞIKÜN', 'АҒЫМДАҒЫКҮН', 'CURRENTDAY' ],
	'currentday2'               => [ '1', 'AĞIMDAĞIKÜN2', 'АҒЫМДАҒЫКҮН2', 'CURRENTDAY2' ],
	'currentdayname'            => [ '1', 'AĞIMDAĞIKÜNATAWI', 'АҒЫМДАҒЫКҮНАТАУЫ', 'CURRENTDAYNAME' ],
	'currentdow'                => [ '1', 'AĞIMDAĞIAPTAKÜNİ', 'АҒЫМДАҒЫАПТАКҮНІ', 'CURRENTDOW' ],
	'currenthour'               => [ '1', 'AĞIMDAĞISAĞAT', 'АҒЫМДАҒЫСАҒАТ', 'CURRENTHOUR' ],
	'currentmonth'              => [ '1', 'AĞIMDAĞIAÝ', 'АҒЫМДАҒЫАЙ', 'CURRENTMONTH', 'CURRENTMONTH2' ],
	'currentmonthabbrev'        => [ '1', 'AĞIMDAĞIAÝJÏIR', 'AĞIMDAĞIAÝQISQA', 'АҒЫМДАҒЫАЙЖИЫР', 'АҒЫМДАҒЫАЙҚЫСҚА', 'CURRENTMONTHABBREV' ],
	'currentmonthname'          => [ '1', 'AĞIMDAĞIAÝATAWI', 'АҒЫМДАҒЫАЙАТАУЫ', 'CURRENTMONTHNAME' ],
	'currentmonthnamegen'       => [ '1', 'AĞIMDAĞIAÝİLİKATAWI', 'АҒЫМДАҒЫАЙІЛІКАТАУЫ', 'CURRENTMONTHNAMEGEN' ],
	'currenttime'               => [ '1', 'AĞIMDAĞIWAQIT', 'АҒЫМДАҒЫУАҚЫТ', 'CURRENTTIME' ],
	'currenttimestamp'          => [ '1', 'AĞIMDAĞIWAQITTÜÝİNDEMESİ', 'AĞIMDAĞIWAQITTÜÝİN', 'АҒЫМДАҒЫУАҚЫТТҮЙІНДЕМЕСІ', 'АҒЫМДАҒЫУАҚЫТТҮЙІН', 'CURRENTTIMESTAMP' ],
	'currentversion'            => [ '1', 'BAĞDARLAMANUSQASI', 'БАҒДАРЛАМАНҰСҚАСЫ', 'CURRENTVERSION' ],
	'currentweek'               => [ '1', 'AĞIMDAĞIAPTASI', 'AĞIMDAĞIAPTA', 'АҒЫМДАҒЫАПТАСЫ', 'АҒЫМДАҒЫАПТА', 'CURRENTWEEK' ],
	'currentyear'               => [ '1', 'AĞIMDAĞIJIL', 'АҒЫМДАҒЫЖЫЛ', 'CURRENTYEAR' ],
	'defaultsort'               => [ '1', 'ÄDEPKİSURIPTAW:', 'ÄDEPKİSANATSURIPTAW:', 'ÄDEPKİSURIPTAWKİLTİ:', 'ÄDEPKİSURIP:', 'ӘДЕПКІСҰРЫПТАУ:', 'ӘДЕПКІСАНАТСҰРЫПТАУ:', 'ӘДЕПКІСҰРЫПТАУКІЛТІ:', 'ӘДЕПКІСҰРЫП:', 'DEFAULTSORT:', 'DEFAULTSORTKEY:', 'DEFAULTCATEGORYSORT:' ],
	'directionmark'             => [ '1', 'BAĞITBELGİSİ', 'БАҒЫТБЕЛГІСІ', 'DIRECTIONMARK', 'DIRMARK' ],
	'displaytitle'              => [ '1', 'KÖRİNETİNTAQIRIAPATI', 'KÖRSETİLETİNATAW', 'КӨРІНЕТІНТАҚЫРЫАПАТЫ', 'КӨРСЕТІЛЕТІНАТАУ', 'DISPLAYTITLE' ],
	'filepath'                  => [ '0', 'FAÝLMEKENİ:', 'ФАЙЛМЕКЕНІ:', 'FILEPATH:' ],
	'forcetoc'                  => [ '0', '__MAZMUNDATQIZW__', '__MQIZW__', '__МАЗМҰНДАТҚЫЗУ__', '__МҚЫЗУ__', '__FORCETOC__' ],
	'formatnum'                 => [ '0', 'SANPİŞİMİ', 'САНПІШІМІ', 'FORMATNUM' ],
	'fullpagename'              => [ '1', 'TOLIQBETATAWI', 'ТОЛЫҚБЕТАТАУЫ', 'FULLPAGENAME' ],
	'fullpagenamee'             => [ '1', 'TOLIQBETATAWI2', 'ТОЛЫҚБЕТАТАУЫ2', 'FULLPAGENAMEE' ],
	'fullurl'                   => [ '0', 'TOLIQJAÝI:', 'TOLIQJAÝ:', 'ТОЛЫҚЖАЙЫ:', 'ТОЛЫҚЖАЙ:', 'FULLURL:' ],
	'fullurle'                  => [ '0', 'TOLIQJAÝI2:', 'TOLIQJAÝ2:', 'ТОЛЫҚЖАЙЫ2:', 'ТОЛЫҚЖАЙ2:', 'FULLURLE:' ],
	'grammar'                   => [ '0', 'SEPTİGİ:', 'SEPTİK:', 'СЕПТІГІ:', 'СЕПТІК:', 'GRAMMAR:' ],
	'hiddencat'                 => [ '1', '__JASIRINSANAT__', '__ЖАСЫРЫНСАНАТ__', '__HIDDENCAT__' ],
	'img_baseline'              => [ '1', 'tirekjol', 'тірекжол', 'baseline' ],
	'img_border'                => [ '1', 'jïekti', 'жиекті', 'border' ],
	'img_bottom'                => [ '1', 'astına', 'астына', 'bottom' ],
	'img_center'                => [ '1', 'ortağa', 'orta', 'ортаға', 'орта', 'center', 'centre' ],
	'img_framed'                => [ '1', 'sürmeli', 'сүрмелі', 'framed', 'enframed', 'frame' ],
	'img_frameless'             => [ '1', 'sürmesiz', 'сүрмесіз', 'frameless' ],
	'img_left'                  => [ '1', 'solğa', 'sol', 'солға', 'сол', 'left' ],
	'img_manualthumb'           => [ '1', 'nobaý=$1', 'нобай=$1', 'thumbnail=$1', 'thumb=$1' ],
	'img_middle'                => [ '1', 'aralığına', 'аралығына', 'middle' ],
	'img_none'                  => [ '1', 'eşqandaý', 'joq', 'ешқандай', 'жоқ', 'none' ],
	'img_page'                  => [ '1', 'bet=$1', 'bet $1', 'бет=$1', 'бет $1', 'page=$1', 'page $1' ],
	'img_right'                 => [ '1', 'oñğa', 'oñ', 'оңға', 'оң', 'right' ],
	'img_sub'                   => [ '1', 'astılığı', 'ast', 'астылығы', 'аст', 'sub' ],
	'img_super'                 => [ '1', 'üstiligi', 'üst', 'үстілігі', 'үст', 'super', 'sup' ],
	'img_text_bottom'           => [ '1', 'mätin-astında', 'мәтін-астында', 'text-bottom' ],
	'img_text_top'              => [ '1', 'mätin-üstinde', 'мәтін-үстінде', 'text-top' ],
	'img_thumbnail'             => [ '1', 'nobaý', 'нобай', 'thumbnail', 'thumb' ],
	'img_top'                   => [ '1', 'üstine', 'үстіне', 'top' ],
	'img_upright'               => [ '1', 'tikti', 'tiktik=$1', 'tiktik $1', 'тікті', 'тіктік=$1', 'тіктік $1', 'upright', 'upright=$1', 'upright $1' ],
	'img_width'                 => [ '1', '$1 nükte', '$1 нүкте', '$1px' ],
	'int'                       => [ '0', 'İŞKİ:', 'ІШКІ:', 'INT:' ],
	'language'                  => [ '0', '#TİL:', '#ТІЛ:', '#LANGUAGE:' ],
	'lc'                        => [ '0', 'KÄ:', 'KİŞİÄRİPPEN:', 'КӘ:', 'КІШІӘРІППЕН:', 'LC:' ],
	'lcfirst'                   => [ '0', 'KÄ1:', 'KİŞİÄRİPPEN1:', 'КӘ1:', 'КІШІӘРІППЕН1:', 'LCFIRST:' ],
	'localday'                  => [ '1', 'JERGİLİKTİKÜN', 'ЖЕРГІЛІКТІКҮН', 'LOCALDAY' ],
	'localday2'                 => [ '1', 'JERGİLİKTİKÜN2', 'ЖЕРГІЛІКТІКҮН2', 'LOCALDAY2' ],
	'localdayname'              => [ '1', 'JERGİLİKTİKÜNATAWI', 'ЖЕРГІЛІКТІКҮНАТАУЫ', 'LOCALDAYNAME' ],
	'localdow'                  => [ '1', 'JERGİLİKTİAPTAKÜNİ', 'ЖЕРГІЛІКТІАПТАКҮНІ', 'LOCALDOW' ],
	'localhour'                 => [ '1', 'JERGİLİKTİSAĞAT', 'ЖЕРГІЛІКТІСАҒАТ', 'LOCALHOUR' ],
	'localmonth'                => [ '1', 'JERGİLİKTİAÝ', 'ЖЕРГІЛІКТІАЙ', 'LOCALMONTH', 'LOCALMONTH2' ],
	'localmonthabbrev'          => [ '1', 'JERGİLİKTİAÝJÏIR', 'JERGİLİKTİAÝQISQAŞA', 'JERGİLİKTİAÝQISQA', 'ЖЕРГІЛІКТІАЙЖИЫР', 'ЖЕРГІЛІКТІАЙҚЫСҚАША', 'ЖЕРГІЛІКТІАЙҚЫСҚА', 'LOCALMONTHABBREV' ],
	'localmonthname'            => [ '1', 'JERGİLİKTİAÝATAWI', 'ЖЕРГІЛІКТІАЙАТАУЫ', 'LOCALMONTHNAME' ],
	'localmonthnamegen'         => [ '1', 'JERGİLİKTİAÝİLİKATAWI', 'ЖЕРГІЛІКТІАЙІЛІКАТАУЫ', 'LOCALMONTHNAMEGEN' ],
	'localtime'                 => [ '1', 'JERGİLİKTİWAQIT', 'ЖЕРГІЛІКТІУАҚЫТ', 'LOCALTIME' ],
	'localtimestamp'            => [ '1', 'JERGİLİKTİWAQITTÜÝİNDEMESİ', 'JERGİLİKTİWAQITTÜÝİN', 'ЖЕРГІЛІКТІУАҚЫТТҮЙІНДЕМЕСІ', 'ЖЕРГІЛІКТІУАҚЫТТҮЙІН', 'LOCALTIMESTAMP' ],
	'localurl'                  => [ '0', 'JERGİLİKTİJAÝ:', 'ЖЕРГІЛІКТІЖАЙ:', 'LOCALURL:' ],
	'localurle'                 => [ '0', 'JERGİLİKTİJAÝ2:', 'ЖЕРГІЛІКТІЖАЙ2:', 'LOCALURLE:' ],
	'localweek'                 => [ '1', 'JERGİLİKTİAPTASI', 'JERGİLİKTİAPTA', 'ЖЕРГІЛІКТІАПТАСЫ', 'ЖЕРГІЛІКТІАПТА', 'LOCALWEEK' ],
	'localyear'                 => [ '1', 'JERGİLİKTİJIL', 'ЖЕРГІЛІКТІЖЫЛ', 'LOCALYEAR' ],
	'msg'                       => [ '0', 'XBR:', 'ХБР:', 'MSG:' ],
	'msgnw'                     => [ '0', 'WÏKÏSİZXBR:', 'УИКИСІЗХБР:', 'MSGNW:' ],
	'namespace'                 => [ '1', 'ESİMAYASI', 'ЕСІМАЯСЫ', 'NAMESPACE' ],
	'namespacee'                => [ '1', 'ESİMAYASI2', 'ЕСІМАЯСЫ2', 'NAMESPACEE' ],
	'newsectionlink'            => [ '1', '__JAÑABÖLİMSİLTEMESİ__', '__ЖАҢАБӨЛІМСІЛТЕМЕСІ__', '__NEWSECTIONLINK__' ],
	'nocontentconvert'          => [ '0', '__MAĞLUMATINTÜRLENDİRGİZBEW__', '__MATJOQ__', '__MAĞLUMATALMASTIRĞIZBAW__', '__MABAW__', '__МАҒЛҰМАТЫНТҮРЛЕНДІРГІЗБЕУ__', '__МАТЖОҚ__', '__МАҒЛҰМАТАЛМАСТЫРҒЫЗБАУ__', '__МАБАУ__', '__NOCONTENTCONVERT__', '__NOCC__' ],
	'noeditsection'             => [ '0', '__BÖLİDİMÖNDEMEW__', '__BÖLİMÖNDETKİZBEW__', '__БӨЛІДІМӨНДЕМЕУ__', '__БӨЛІМӨНДЕТКІЗБЕУ__', '__NOEDITSECTION__' ],
	'nogallery'                 => [ '0', '__QOÝMASIZ__', '__QSIZ__', '__ҚОЙМАСЫЗ__', '__ҚСЫЗ__', '__NOGALLERY__' ],
	'notitleconvert'            => [ '0', '__TAQIRIPATINTÜRLENDİRGİZBEW__', '__TATJOQ__', '__ATAWALMASTIRĞIZBAW__', '__AABAW__', '__ТАҚЫРЫПАТЫНТҮРЛЕНДІРГІЗБЕУ__', '__ТАТЖОҚ__', '__АТАУАЛМАСТЫРҒЫЗБАУ__', '__ААБАУ__', '__NOTITLECONVERT__', '__NOTC__' ],
	'notoc'                     => [ '0', '__MAZMUNSIZ__', '__MSIZ__', '__МАЗМҰНСЫЗ__', '__МСЫЗ__', '__NOTOC__' ],
	'ns'                        => [ '0', 'EA:', 'ESİMAYA:', 'ЕА:', 'ЕСІМАЯ:', 'NS:' ],
	'numberofadmins'            => [ '1', 'ÄKİMŞİSANI', 'ӘКІМШІСАНЫ', 'NUMBEROFADMINS' ],
	'numberofarticles'          => [ '1', 'MAQALASANI', 'МАҚАЛАСАНЫ', 'NUMBEROFARTICLES' ],
	'numberofedits'             => [ '1', 'ÖÑDEMESANI', 'TÜZETWSANI', 'ӨҢДЕМЕСАНЫ', 'ТҮЗЕТУСАНЫ', 'NUMBEROFEDITS' ],
	'numberoffiles'             => [ '1', 'FAÝLSANI', 'ФАЙЛСАНЫ', 'NUMBEROFFILES' ],
	'numberofpages'             => [ '1', 'BETSANI', 'БЕТСАНЫ', 'NUMBEROFPAGES' ],
	'numberofusers'             => [ '1', 'QATISWŞISANI', 'ҚАТЫСУШЫСАНЫ', 'NUMBEROFUSERS' ],
	'padleft'                   => [ '0', 'SOLĞAIĞIS', 'SOLIĞIS', 'СОЛҒАЫҒЫС', 'СОЛЫҒЫС', 'PADLEFT' ],
	'padright'                  => [ '0', 'OÑĞAIĞIS', 'OÑIĞIS', 'ОҢҒАЫҒЫС', 'ОҢЫҒЫС', 'PADRIGHT' ],
	'pagename'                  => [ '1', 'BETATAWI', 'БЕТАТАУЫ', 'PAGENAME' ],
	'pagenamee'                 => [ '1', 'BETATAWI2', 'БЕТАТАУЫ2', 'PAGENAMEE' ],
	'pagesincategory'           => [ '1', 'SANATTAĞIBETTER', 'САНАТТАҒЫБЕТТЕР', 'PAGESINCATEGORY', 'PAGESINCAT' ],
	'pagesinnamespace'          => [ '1', 'ESİMAYABETSANI:', 'EABETSANI:', 'AYABETSANI:', 'ЕСІМАЯБЕТСАНЫ:', 'ЕАБЕТСАНЫ:', 'АЯБЕТСАНЫ:', 'PAGESINNAMESPACE:', 'PAGESINNS:' ],
	'pagesize'                  => [ '1', 'BETMÖLŞERİ', 'БЕТМӨЛШЕРІ', 'PAGESIZE' ],
	'plural'                    => [ '0', 'KÖPŞETÜRİ:', 'KÖPŞE:', 'КӨПШЕТҮРІ:', 'КӨПШЕ:', 'PLURAL:' ],
	'raw'                       => [ '0', 'QAM:', 'ҚАМ:', 'RAW:' ],
	'rawsuffix'                 => [ '1', 'Q', 'Қ', 'R' ],
	'redirect'                  => [ '0', '#AÝDAW', '#АЙДАУ', '#REDIRECT' ],
	'revisionday'               => [ '1', 'TÜZETWKÜNİ', 'NUSQAKÜNİ', 'ТҮЗЕТУКҮНІ', 'НҰСҚАКҮНІ', 'REVISIONDAY' ],
	'revisionday2'              => [ '1', 'TÜZETWKÜNİ2', 'NUSQAKÜNİ2', 'ТҮЗЕТУКҮНІ2', 'НҰСҚАКҮНІ2', 'REVISIONDAY2' ],
	'revisionid'                => [ '1', 'TÜZETWNÖMİRİ', 'NUSQANÖMİRİ', 'ТҮЗЕТУНӨМІРІ', 'НҰСҚАНӨМІРІ', 'REVISIONID' ],
	'revisionmonth'             => [ '1', 'TÜZETWAÝI', 'NUSQAAÝI', 'ТҮЗЕТУАЙЫ', 'НҰСҚААЙЫ', 'REVISIONMONTH' ],
	'revisiontimestamp'         => [ '1', 'TÜZETWWAQITITAÑBASI', 'NUSQAWAQITTÜÝİNDEMESİ', 'ТҮЗЕТУУАҚЫТЫТАҢБАСЫ', 'НҰСҚАУАҚЫТТҮЙІНДЕМЕСІ', 'REVISIONTIMESTAMP' ],
	'revisionyear'              => [ '1', 'TÜZETWJILI', 'NUSQAJILI', 'ТҮЗЕТУЖЫЛЫ', 'НҰСҚАЖЫЛЫ', 'REVISIONYEAR' ],
	'scriptpath'                => [ '0', 'ÄMİRJOLI', 'ӘМІРЖОЛЫ', 'SCRIPTPATH' ],
	'servername'                => [ '0', 'SERVERATAWI', 'СЕРВЕРАТАУЫ', 'SERVERNAME' ],
	'sitename'                  => [ '1', 'TORAPATAWI', 'ТОРАПАТАУЫ', 'SITENAME' ],
	'special'                   => [ '0', 'arnaýı', 'арнайы', 'special' ],
	'subjectpagename'           => [ '1', 'TAQIRIPBETATAWI', 'MAQALABETATAWI', 'ТАҚЫРЫПБЕТАТАУЫ', 'МАҚАЛАБЕТАТАУЫ', 'SUBJECTPAGENAME', 'ARTICLEPAGENAME' ],
	'subjectpagenamee'          => [ '1', 'TAQIRIPBETATAWI2', 'MAQALABETATAWI2', 'ТАҚЫРЫПБЕТАТАУЫ2', 'МАҚАЛАБЕТАТАУЫ2', 'SUBJECTPAGENAMEE', 'ARTICLEPAGENAMEE' ],
	'subjectspace'              => [ '1', 'TAQIRIPBETİ', 'MAQALABETİ', 'ТАҚЫРЫПБЕТІ', 'МАҚАЛАБЕТІ', 'SUBJECTSPACE', 'ARTICLESPACE' ],
	'subjectspacee'             => [ '1', 'TAQIRIPBETİ2', 'MAQALABETİ2', 'ТАҚЫРЫПБЕТІ2', 'МАҚАЛАБЕТІ2', 'SUBJECTSPACEE', 'ARTICLESPACEE' ],
	'subpagename'               => [ '1', 'BETŞEATAWI', 'ASTIÑĞIBETATAWI', 'БЕТШЕАТАУЫ', 'АСТЫҢҒЫБЕТАТАУЫ', 'SUBPAGENAME' ],
	'subpagenamee'              => [ '1', 'BETŞEATAWI2', 'ASTIÑĞIBETATAWI2', 'БЕТШЕАТАУЫ2', 'АСТЫҢҒЫБЕТАТАУЫ2', 'SUBPAGENAMEE' ],
	'subst'                     => [ '0', 'BÄDEL:', 'БӘДЕЛ:', 'SUBST:' ],
	'tag'                       => [ '0', 'belgi', 'белгі', 'tag' ],
	'talkpagename'              => [ '1', 'TALQILAWBETATAWI', 'ТАЛҚЫЛАУБЕТАТАУЫ', 'TALKPAGENAME' ],
	'talkpagenamee'             => [ '1', 'TALQILAWBETATAWI2', 'ТАЛҚЫЛАУБЕТАТАУЫ2', 'TALKPAGENAMEE' ],
	'talkspace'                 => [ '1', 'TALQILAWAYASI', 'ТАЛҚЫЛАУАЯСЫ', 'TALKSPACE' ],
	'talkspacee'                => [ '1', 'TALQILAWAYASI2', 'ТАЛҚЫЛАУАЯСЫ2', 'TALKSPACEE' ],
	'toc'                       => [ '0', '__MAZMUNI__', '__MZMN__', '__МАЗМҰНЫ__', '__МЗМН__', '__TOC__' ],
	'uc'                        => [ '0', 'BÄ:', 'BASÄRİPPEN:', 'БӘ:', 'БАСӘРІППЕН:', 'UC:' ],
	'ucfirst'                   => [ '0', 'BÄ1:', 'BASÄRİPPEN1:', 'БӘ1:', 'БАСӘРІППЕН1:', 'UCFIRST:' ],
	'urlencode'                 => [ '0', 'JAÝDIMUQAMDAW:', 'ЖАЙДЫМҰҚАМДАУ:', 'URLENCODE:' ],
];

/** @phpcs-require-sorted-array */
$specialPageAliases = [
	'Allmessages'               => [ 'Barlıq_xabarlar' ],
	'Allpages'                  => [ 'Barlıq_better' ],
	'Ancientpages'              => [ 'Eski_better' ],
	'Block'                     => [ 'Jaýdı_buğattaw', 'IP_buğattaw' ],
	'BlockList'                 => [ 'Buğattalğandar' ],
	'Booksources'               => [ 'Kitap_qaýnarları' ],
	'BrokenRedirects'           => [ 'Jaramsız_aýdağıştar', 'Jaramsız_aýdatwlar' ],
	'Categories'                => [ 'Sanattar' ],
	'ChangePassword'            => [ 'Qupïya_sözdi_qaýtarw' ],
	'Confirmemail'              => [ 'Quptaw_xat' ],
	'Contributions'             => [ 'Ülesi' ],
	'CreateAccount'             => [ 'Jaña_tirkelgi', 'Tirkelgi_Jaratw' ],
	'Deadendpages'              => [ 'Tuýıq_better' ],
	'DoubleRedirects'           => [ 'Şınjırlı_aýdağıştar', 'Şınjırlı_aýdatwlar' ],
	'Emailuser'                 => [ 'Xat_jiberw' ],
	'Export'                    => [ 'Sırtqa_berw' ],
	'Fewestrevisions'           => [ 'Eñ_az_tüzetilgen' ],
	'FileDuplicateSearch'       => [ 'Faýl_telnusqasın_izdew', 'Qaýtalanğan_faýldardı_izdew' ],
	'Filepath'                  => [ 'Faýl_mekeni' ],
	'Import'                    => [ 'Sırttan_alw' ],
	'Invalidateemail'           => [ 'Quptamaw_xatı' ],
	'Listadmins'                => [ 'Äkimşiler', 'Äkimşi_tizimi' ],
	'Listbots'                  => [ 'Bottar', 'Bottar_tizimi' ],
	'Listfiles'                 => [ 'Swret_tizimi' ],
	'Listgrouprights'           => [ 'Top_quqıqtarı_tizimi' ],
	'Listredirects'             => [ 'Aýdatw_tizimi' ],
	'Listusers'                 => [ 'Qatıswşılar', 'Qatıswşı_tizimi' ],
	'Lockdb'                    => [ 'Derekqordı_qulıptaw' ],
	'Log'                       => [ 'Jwrnal', 'Jwrnaldar' ],
	'Lonelypages'               => [ 'Sayaq_better' ],
	'Longpages'                 => [ 'Uzın_better', 'Ülken_better' ],
	'MergeHistory'              => [ 'Tarïx_biriktirw' ],
	'MIMEsearch'                => [ 'MIME_türimen_izdew' ],
	'Mostcategories'            => [ 'Eñ_köp_sanattar_barı' ],
	'Mostimages'                => [ 'Eñ_köp_paýdalanılğan_swretter', 'Eñ_köp_swretter_barı' ],
	'Mostlinked'                => [ 'Eñ_köp_siltengen_better' ],
	'Mostlinkedcategories'      => [ 'Eñ_köp_paýdalanılğan_sanattar', 'Eñ_köp_siltengen_sanattar' ],
	'Mostlinkedtemplates'       => [ 'Eñ_köp_paýdalanılğan_ülgiler', 'Eñ_köp_siltengen_ülgiler' ],
	'Mostrevisions'             => [ 'Eñ_köp_tüzetilgen', 'Eñ_köp_nusqalar_barı' ],
	'Movepage'                  => [ 'Betti_jıljıtw' ],
	'Mycontributions'           => [ 'Ülesim' ],
	'Mypage'                    => [ 'Jeke_betim' ],
	'Mytalk'                    => [ 'Talqılawım' ],
	'Newimages'                 => [ 'Jaña_swretter' ],
	'Newpages'                  => [ 'Jaña_better' ],
	'Preferences'               => [ 'Baptalımdar', 'Baptaw' ],
	'Prefixindex'               => [ 'Bastawış_tizimi' ],
	'Protectedpages'            => [ 'Qorğalğan_better' ],
	'Protectedtitles'           => [ 'Qorğalğan_taqırıptar', 'Qorğalğan_atawlar' ],
	'Randompage'                => [ 'Kezdeýsoq', 'Kezdeýsoq_bet' ],
	'Randomredirect'            => [ 'Kedeýsoq_aýdağış', 'Kedeýsoq_aýdatw' ],
	'Recentchanges'             => [ 'Jwıqtağı_özgerister' ],
	'Recentchangeslinked'       => [ 'Siltengenderdiñ_özgeristeri', 'Qatıstı_özgerister' ],
	'Revisiondelete'            => [ 'Tüzetw_joyw', 'Nusqanı_joyw' ],
	'Search'                    => [ 'İzdew' ],
	'Shortpages'                => [ 'Qısqa_better' ],
	'Specialpages'              => [ 'Arnaýı_better' ],
	'Statistics'                => [ 'Sanaq' ],
	'Uncategorizedcategories'   => [ 'Sanatsız_sanattar' ],
	'Uncategorizedimages'       => [ 'Sanatsız_swretter' ],
	'Uncategorizedpages'        => [ 'Sanatsız_better' ],
	'Uncategorizedtemplates'    => [ 'Sanatsız_ülgiler' ],
	'Undelete'                  => [ 'Joywdı_boldırmaw', 'Joýılğandı_qaýtarw' ],
	'Unlockdb'                  => [ 'Derekqordı_qulıptamaw' ],
	'Unusedcategories'          => [ 'Paýdalanılmağan_sanattar' ],
	'Unusedimages'              => [ 'Paýdalanılmağan_swretter' ],
	'Unusedtemplates'           => [ 'Paýdalanılmağan_ülgiler' ],
	'Unwatchedpages'            => [ 'Baqılanılmağan_better' ],
	'Upload'                    => [ 'Qotarıp_berw', 'Qotarw' ],
	'Userlogin'                 => [ 'Qatıswşı_kirwi' ],
	'Userlogout'                => [ 'Qatıswşı_şığwı' ],
	'Userrights'                => [ 'Qatıswşı_quqıqtarı' ],
	'Version'                   => [ 'Nusqası' ],
	'Wantedcategories'          => [ 'Toltırılmağan_sanattar' ],
	'Wantedpages'               => [ 'Toltırılmağan_better', 'Jaramsız_siltemeler' ],
	'Watchlist'                 => [ 'Baqılaw_tizimi' ],
	'Whatlinkshere'             => [ 'Mında_siltegender' ],
	'Withoutinterwiki'          => [ 'Wïkï-aralıqsızdar' ],
];
