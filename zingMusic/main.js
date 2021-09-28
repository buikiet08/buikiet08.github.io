var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var body = $('.app');
var content = $('.content');
var song = $('.song');
var audio = $('.audio');
var btnplaypause = $('.playpause');
var btnplayon = $('.on');
var btnplayoff = $('.off');
var btnprev = $('.prev');
var btnnext = $('.next');
var restar = $('.restar');
var namesong = $('.namesong');
var outher = $('.outhersong');
var cdthump = $(".cd_thump");
var cdthumpAfter = $(".cd_thump-after");

var propress = $('#propress');
var propressVolumne = $('#propress_volum');
var btnlistsong = $('.btn_list-song');
var listsong = $('.lists_song');
var listsongson = $('.list_song-son');
var firstsong = $$('.first_song')
var btncloselist = $('.btn_close-list');
var btncloselyric = $('.btn_close-lyric');
var btntop = $('.btn_list-active');
var topactive = $('.btn_top-active');
var btntops = $('.btn_top');
var random = $('.random');
var stopvolumn = $('.stop_volumn');
var volumehigh = $('.volume_high');
var volumemute = $('.volume_mute');
// var moonsun = $('.moon_sun');
// var moon = $('.moon');
// var sun = $('.sun');
// var lyrics = $('.lyrics');
var lyricson = $('.lyric');
var timeStart = $('.timeStart');
var timeEnd = $('.timeEnd');
var iconVolume = $('.icon-volume');

var songlist = [
    {   
        idNewSong:1,
        idsontung : true,
        idVN : 1,
        songtop : 1,
        songid : 1,
        songimg : 'image/images2364451_t17_3.jpg',
        songouther : 'Sơn Tùng MTP',
        songname : 'Muộn Rồi Mà Sao Còn',
        songlink : 'list_song/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3',
        lyric : `Muộn rồi mà sao còn 
        nhìn lên trần nhà rồi quay ra lại quay vào<br/>
        Nằm trằn trọc vậy đến sáng mai<br/>
        Ôm tương tư, nụ cười của ai đó
        Làm con tim ngô nghê như muốn khóc òa<br/>
        Vắt tay lên trên trán mơ mộng<br/>
        Được đứng bên em trong nắng xuân hồng<br/>
        1 giờ sáng trôi qua trôi nhanh kéo theo ưu phiền miên man<br/>
        Âm thầm gieo tên em vẽ lên hi vọng<br/>
        Đúng là yêu thật rồi 
        còn không thì hơi phí này 
        cứ thế loanh quanh loanh
        Quanh loanh quanh lật qua lật lại (2 giờ)<br/>
        Những ngôi sao trên cao 
        là người bạn tâm giao
        Lắng nghe anh luyên thuyên 
        về một tình đầu đẹp tựa chiêm bao<br/>
        Có nghe thôi đã thấy ngọt ngào<br/>
        Đủ biết anh si mê em nhường nào<br/>
        Ít khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào<br/>
        Nắm đôi tay kiêu sa được một lần không ta<br/>
        Nghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà<br/>
        Hóa ra yêu đơn phương một người<br/>
        Hóa ra khi tơ vương một người 3 giờ đêm vẫn ngồi cười<br/>
        
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi<br/>
        Ôm trong cơn mơ trong cơn mơ trong cơn mơ trong cơn mơ<br/>
        Có thế cũng khiến anh vui điên lên ngỡ như em đang bên<br/>
        Chắp bút đôi ba câu thơ ngọt ngào muốn em đặt tên<br/>
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi<br/>
        Ôm trong giấc mơ trong cơn mơ trong cơn mơ trong cơn mơ<br/>
        Yêu đến vậy thôi phát điên rồi làm sao giờ<br/><br/>
        
        [Rap:]<br/>
        Chịu!<br/>
        Đêm nay không ngủ<br/>
        Tay kê lên tủ<br/>
        Miên man anh tranh thủ chơi với suy tư bao nhiêu cho đủ<br/>
        Yêu em ngu ngơ mình tôi<br/>
        Yêu không quan tâm ngày trôi<br/>
        Yêu ánh mắt bờ môi<br/>
        Yêu đơn phương vậy thôi<br/>
        Lại còn chối<br/>
        Con tim thẹn thùng đập lạc lối liên hồi<br/>
        Đừng chày cối<br/>
        Miệng cười cả ngày vậy là chết toi rồi<br/>
        Ngày càng nhiều thêm<br/>
        Tình yêu cho em ngày càng nhiều thêm<br/>
        Muốn nắm đôi bàn tay đó một lần<br/>
        Du dương chìm sâu trong từng câu ca dịu êm<br/><br/>
        
        [Ver 2:]<br/>
        Những ngôi sao trên cao<br/>
        Là người bạn tâm giao<br/>
        Lắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao<br/>
        Có nghe thôi đã thấy ngọt ngào<br/>
        Đủ biết anh si mê em nhường nào<br/>
        Ít khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào<br/>
        Nắm đôi tay kiêu sa được một lần không ta<br/>
        Nghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà<br/>
        Hóa ra yêu đơn phương một người<br/>
        Hóa ra khi tơ vương một người 3 giờ đêm vẫn ngồi cười<br/>
        
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi<br/>
        Ôm trong cơn mơ trong cơn mơ trong cơn mơ trong cơn mơ<br/>
        Có thế cũng khiến anh vui điên lên ngỡ như em đang bên<br/>
        Chắp bút đôi ba câu thơ ngọt ngào muốn em đặt tên<br/>
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi<br/>
        Ôm trong giấc mơ trong cơn mơ trong cơn mơ trong cơn mơ<br/>
        Yêu đến vậy thôi phát điên rồi làm sao giờ<br/>
        
        Em xinh như một thiên thần<br/>
        Như một thiên thần<br/>
        Như một thiên thần<br/>
        Ngỡ như em là thiên thần<br/>
        Em xinh như một thiên thần<br/>
        Như một thiên thần<br/>
        
        Em xinh như một thiên thần<br/>
        Như một thiên thần<br/>
        Như một thiên thần<br/>
        Ngỡ như em là thiên thần<br/>
        Ngỡ như ngỡ như ngỡ như ngỡ như ngỡ như<br/>
        
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi<br/>
        Ôm trong cơn mơ trong cơn mơ trong cơn mơ trong cơn mơ<br/>
        Có thế cũng khiến anh vui điên lên ngỡ như em đang bên<br/>
        Chắp bút đôi ba câu thơ ngọt ngào muốn em đặt tên<br/>
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi<br/>
        Ôm trong giấc mơ trong cơn mơ trong cơn mơ trong cơn mơ<br/>
        Yêu đến vậy thôi phát điên rồi làm sao giờ`
    },
    {       
        idNewSong:2, 
        idVN : 1,
        songtop : 1,
        songid : 2,
        songimg : 'image/3107-la-gi-3.jpg',
        songouther : 'Duongg - Nau - titie',
        songname : '3107 - 3',
        songlink : 'list_song/31073-WNDuonggNautitie-7059323.mp3',
        lyric : `Xin lỗi em về những chuyện mà ta đã nghĩ<br/>
        Xin lỗi em về những gì mà ta đã nói<br/>
        Vì bao câu chuyện mình lúc xưa<br/>
        Giờ đây chẳng thể viết tiếp được<br/>
        
        Chỉ là xa thôi mà,<br/> chẳng khi nào ta ngừng nghĩ đến nhau.<br/>
        Bao tháng năm vô tư hồn nhiên biết mấy<br/>
        Những chuyến xe ta đi cùng năm tháng ấy<br/>
        Giờ đây chỉ là những thước phim<br/>
        
        Phai mờ sâu vào những kỉ niệm<br/>
        Điều duy nhất bây giờ, còn nhớ chỉ là vài câu<br/>
        Xin lỗi vì những lời hứa, xin lỗi chẳng yêu được nữa<br/>
        Xin lỗi vì em chẳng thể đến bên cạnh anh mỗi khi trời đổ mưa<br/>
        
        Xin lỗi vì em đã đúng, xin lỗi vì anh đã sai<br/>
        Xin lỗi vì ta chẳng thể đi cùng nhau để bây giờ cách xa<br/>
        Vòng xe thứ nhất là đón đưa em qua từng điểm hẹn ngày đầu tiên<br/>
        Góc phố đèn mờ có ngọn đèn cũ thổi hồn nỗi buồn này vào tim<br/>
        
        Vòng xe thứ hai là cùng với em đón nắng ngày xuân vào chiều tà<br/>
        Là thèm được nhớ nhưng rồi phải buông với họ gọi đó là yêu xa<br/>
        Em đâu hay biết, vẫn có người đứng chờ đợi em tới giữa khuya<br/>
        Chỉ để quan tâm em dẫu biết rằng em đang bận lòng với nửa kia<br/>
        
        Cùng một góc nhìn nhưng cảm xúc bây giờ dần trở nên vô vị<br/>
        Đứng trên dốc tình chỉ là mỗi góc nhìn để thấy được em và đô thị<br/>
        Ở trong thành phố, lòng đành cố gào thét khiến cổ họng khát khô<br/>
        Bây giờ là một giờ sáng, cafe đậm hòa cùng gói Bastos<br/>
        
        Anh từng sống trong tim em, quá thời hạn nhưng rồi phải ra đi<br/>
        Thành phố hồi đó có trời gió và em còn hơn cả Paris<br/>
        “Anh cũng chỉ nghĩ về những thứ mơ mộng thôi<br/>
        
        Dẫu biết thực tế khác xa vời vợi rồi<br/>
        Cũng chả rõ mình đã nhớ em về bao nhiêu đêm<br/>
        Nhưng mà ít nhiều gì thì anh cũng đã từng là một người rất yêu em”`
    },
    {        
        idNewSong:3,
        idVN : 1,
        songtop : 1,
        songid : 3,
        songimg : 'image/photo-1-16266149790192082922515.jpg',
        songouther : 'MONSTAR',
        songname : 'Có Hẹn Với Thanh Xuân',
        songlink : 'list_song/co-hen-voi-thanh-xuan-MONSTAR.mp3',
        lyric :  `[Nicky]

        Cũng đã đến lúc nghẹn ngào
        nói lời chào đến mối tình đầu<br/>
        Một cuốn sách ngọt ngào
         mà đôi ta từng viết<br/>
        Em như bông hoa mặt trời,
         có nụ cười đốt cháy lòng người<br/>
        Có lẽ em là thanh xuân của tôi
        <br/>
        <br/>
        [Grey D]
        
        Từ ngày mai tôi phải đi<br/>
        Hẹn gặp em trong một khi khác<br/>
        Kỷ niệm đôi ta đành ghi nhớ trong tim<br/>
        Này người ơi em đừng quên
        lần đầu tiên ta bước đến<br/>
        Mình đã chìm vào vùng trời yêu thương
        <br/>
        <br/>
        [Zino]
        
        Nếu lỡ mai đây vô tình thấy được nhau<br/>
        Hãy để cho tôi nói với em lời chào<br/>
        Nếu trái tim ta chung nỗi nhớ đong đầy<br/>
        Hẹn gặp lại em ngày tháng của sau này<br/>
        
        Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br/>
        Hoo-uh-uh-ah ha-ah-ah<br/>
        Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br/>
        Hoo-uh-uh-ah ha-ah-ah<br/>
        Hẹn gặp lại em ngày tháng của sau này
        <br/>
        <br/>
        Ver 2
        
        Tôi giờ đang nơi xa
         bận lòng nhiều điều về em
        (Worry about u)
        <br/>
        Em bình tâm hơn chưa
        hay là nước mắt nhòe suốt đêm<br/>
        Một ngày của em dạo này như thế nào<br/>
        Thường đi quán quen hay đến nơi ồn ào<br/>
        Từ ngày tụi mình kết thúc
         bây giờ cuộc sống em ra sao
        <br/>
        <br/>
        [J]
        
        Thôi thì mong em đừng khóc nữa,
         đừng bỏ bữa những ngày sau<br/>
        Không còn anh,
         bao điều vẫn tốt như xưa<br/>
        Mong em ngủ ngoan không hoài nghĩ nữa<br/>
        Đừng thức trắng đêm trầm tư<br/>
        Vì anh chẳng muốn thấy người mà mình yêu đau
        <br/>
        <br/>
        [Zino]
        
        Nếu lỡ mai đây vô tình thấy được nhau<br/>
        Hãy để cho tôi nói với em lời chào<br/>
        Nếu trái tim ta chung nỗi nhớ đong đầy<br/>
        Hẹn gặp lại em ngày tháng của sau này
        <br/>
        <br/>
        [J]
        
        Nếu lỡ mai đây vô tình thấy được nhau<br/>
        Hãy để cho tôi nói với em lời chào<br/>
        Nếu trái tim ta chung nỗi nhớ đong gầy<br/>
        Hẹn gặp lại em ngày tháng của sau này<br/>
        
        Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br/>
        Hoo-uh-uh-ah ha-ah-ah<br/>
        Hoo-uh-uh-ah uh-ah-uh hoo-uh-uh-ah<br/>
        Hoo-uh-uh-ah ha-ah-ah<br/>
        Hẹn gặp lại em ngày tháng của sau này`
    },
    {        
        idsontung : true,
        idVN : 1,
        songtop : 1,
        songid : 4,
        songimg : 'image/1061332173675372452476431818456362453126714o-1593780823287457624164-crop-1593780866985947628599.jpg',
        songouther : 'Sơn Tùng MTP',
        songname : 'Có Chắc Yêu Là Đây',
        songlink : 'list_song/SƠN TÙNG M-TP _ CÓ CHẮC YÊU LÀ ĐÂY _ OFFICIAL MUSIC VIDEO.mp3',
        lyric : `
        [Verse 1]
        Thấp thoáng ánh mắt đôi môi mang theo hương mê say<br/>
        Em cho anh tan trong miên man quên luôn đi đêm ngày<br/>
        Chạm nhẹ vội vàng hai ba giây nhưng con tim đâu hay<br/>
        Bối rối khẽ lên ngôi yêu thương đong đầy thật đầy<br/>
        
        Anh ngẩn ngơ cứ ngỡ<br/>
        (Đó chỉ là giấc mơ)<br/>
        Anh ngẩn ngơ cứ ngỡ<br/>
        (Như đang ngất ngây trong giấc mơ)<br/>
        Thật ngọt ngào êm dịu đắm chìm<br/>
        Phút chốc viết tương tư gieo nên thơ<br/><br/>
        
        [Refrain]
        Có câu ca trong gió hát ngân nga ru trời mây<br/>
        Nhẹ nhàng đón ban mai ngang qua trao nụ cười<br/>
        Nắng đua chen khoe sắc vui đùa giữa muôn ngàn hoa<br/>
        Dịu dàng đến nhân gian âu yếm tâm hồn người<br/>
        
        Hình như chính em<br/>
        (Cho anh mong chờ)<br/>
        Hình như chính là em<br/>
        (Cho anh vấn vương)<br/>
        Đừng thờ ơ xin hãy lắng nghe và giúp anh trả lời đôi điều còn băn khoăn<br/><br/>
        
        [Chorus]
        Có chắc yêu là đây đây đây<br/>
        Có chắc yêu là đây đây<br/>
        Có chắc yêu là đây đây đây<br/>
        Có chắc yêu là đây đây<br/>
        Em lang thang cả ngày trong tâm trí<br/>
        Đi không ngừng cả ngày trong tâm trí<br/>
        Si mê thêm cuồng quay<br/>
        Ah uhhh<br/>
        (Có chắc yêu là đây)<br/><br/>
        
        [Verse 2]
        Chắc gì nữa mà chắc<br/>
        Sáng thì nhớ đêm trắng tương tư còn không phải yêu là gì<br/>
        (Có chắc yêu là đây)<br/>
        Rồi thắc gì nữa mà mắc<br/>
        Đến bên nắm tay nói ra ngay ngồi mơ mộng thêm làm gì<br/>
        Nhanh chân chạy mua một bó hoa<br/>
        Thêm luôn một món quà<br/>
        Khuôn mặt tươi cười lên vô tư gạt đi lo âu mạnh mẽ nha<br/>
        Và rồi bước ra, bước ra, bước ra...<br/><br/>
        
        [Refrain]
        Có câu ca trong gió hát ngân nga ru trời mây<br/>
        Nhẹ nhàng đón ban mai ngang qua trao nụ cười<br/>
        Nắng đua chen khoe sắc vui đùa giữa muôn ngàn hoa<br/>
        Dịu dàng đến nhân gian âu yếm tâm hồn người<br/>
        
        Hình như chính em<br/>
        (Cho anh mong chờ)<br/>
        Hình như chính là em<br/>
        (Cho anh vấn vương)<br/>
        Đừng thờ ơ xin hãy lắng nghe và giúp anh trả lời đôi điều còn băn khoăn<br/>
        <br/>
        [Chorus]
        Có chắc yêu là đây đây đây<br/>
        Có chắc yêu là đây đây<br/>
        Có chắc yêu là đây đây đây<br/>
        Có chắc yêu là đây đây<br/>
        Em lang thang cả ngày trong tâm trí<br/>
        Đi không ngừng cả ngày trong tâm trí<br/>
        Si mê thêm cuồng quay<br/>
        Ah uhhh<br/>
        <br/>
        [Bridge]
        Có chắc yêu là đây<br/>
        Ah-ah<br/>
        Có chắc yêu là đây<br/>
        Uh-uh<br/>
        Có chắc yêu là đây<br/>
        Please come to me, come to me, please come to me...<br/><br/>
        
        [Chorus]
        Có chắc yêu là đây đây đây<br/>
        Có chắc yêu là đây đây<br/>
        Có chắc yêu là đây đây đây<br/>
        Có chắc yêu là đây đây<br/>
        Em lang thang cả ngày trong tâm trí<br/>
        Đi không ngừng cả ngày trong tâm trí<br/>
        Si mê thêm cuồng quay<br/>
        Ah uhhh`
    },
    {        
        idVN : 1,
        songtop : 1,
        songid : 5,
        songimg : 'image/ab67616d0000b273584941358113e20c6fce2175.jpg',
        songouther : 'Dalab',
        songname : 'Thức Giấc',
        songlink : 'list_song/ThucGiac-DaLAB-7048212.mp3',
        lyric : `Sau những con đường quen<br/>
        Ta đã vô tình đến<br/>
        Là nụ cười em quẩn quanh với giấc mơ<br/>
        Nơi những ánh đèn sáng<br/>
        Ta với khung hình khác<br/>
        Là bình yên cất giấu trước cuộc đời<br/>
        
        Nhìn xem lần sau cuối, là bao điều tiếc nuối<br/>
        Tình yêu là thứ khiến em quên đi vài lần yếu đuối<br/>
        Lặng nhìn giọt sương rơi...lạc trong màu u tối<br/>
        Là khi tình yêu ấy đã khiến em thôi những mộng mơ<br/>
        
        Anh vẫn thức giấc trên giường<br/>
        Với giấc mơ vừa tàn<br/>
        Bản nhạc vụt tắt<br/>
        Bộ phim kia dừng lại<br/>
        Nghe tiếng mưa rơi bên thềm<br/>
        Anh ngước mắt lặng nhìn Rồi chờ đợi mãi...Vẫn không quay lại<br/>
        
        No no no .... baby let me know<br/>
        no no no .... baby let me know<br/>
        
        Điều gì xảy ra khi chia đôi cơn mơ<br/>
        Một thực tại kia không có em đợi chờ<br/>
        Nhìn từng hạt mưa rơi bên hiên vỡ tan<br/>
        Từng ký ức lỡ mang, sao nỡ quên vội vàng<br/>
        
        Ở bên anh thêm một đêm thôi một đêm thôi<br/>
        Anh đã từng định nói nhưng rồi lại lặng im thôi lặng im thôi<br/>
        Vì anh biết không thể trói buộc<br/>
        Phía trước là bầu trời cao sâu<br/>
        Sống với những mơ ước thì chẳng được bao lâu<br/>
        Và tất cả đã hết sẽ chẳng có hồi kết<br/>
        Không có câu tạm biệt nhưng cũng chẳng sao đâu<br/>
        
        Anh vẫn thức giấc trên giường<br/>
        Với giấc mơ vừa tàn<br/>
        Bản nhạc vụt tắt<br/>
        Bộ phim kia dừng lại<br/>
        Nghe tiếng mưa rơi bên thềm<br/>
        Anh ngước mắt lặng nhìn<br/>
        Rồi chờ đợi mãi...Vẫn không quay lại<br/>
        
        No no no .... baby let me know<br/>
        No no no .... baby let me know<br/>
        
        Lênh đênh trên ranh giới giữa thực tại<br/>
        Giật mình tỉnh giấc trống không cô đơn<br/>
        Hay mơ tiếp những giấc mơ chẳng thành<br/>
        Nhặt nhạnh từng chút hơi ấm em còn đâu đây<br/>
        
        Lại là một ngày mới anh thức giấc với thở dài<br/>
        Lại là một ngày mới đánh thức anh bằng nỗi đau<br/>
        Dù biết không có phép màu nào níu em quay trở lại<br/>
        Chỉ một lần sau cuối cho anh được thấy hình bóng em<br/>
        
        yeah yeah ah<br/>
        Làm sao anh biết mình đang mơ hay thực tại ah<br/>
        It feels so real<br/>
        Anh quay con quay mong con quay không dừng lại ah<br/>
        Nếu em hiện ra, liệu anh có ngần ngại,<br/>
        Thả mình, để anh ngã, chìm đắm trên đôi vai<br/>
        Hay là vùng dậy để tỉnh giấc không bên ai, nghe nỗi đau thêm dài ah<br/>
        Càng muốn quên, càng nhớ kỹ ghi lâu<br/>
        Trong giấc mơ, liệu ta có bên nhau?<br/>
        Khi anh thấy ở trong vòng tay<br/>
        Anh chẳng hề có em, anh có nên nhắm mắt lại rồi lại đi xuống thêm sâu<br/>
        Ah một mai thức giấc<br/>
        Hay sẽ mãi mơ ah<br/>
        Đoạn phim lặp đi lặp lại trong đầu.<br/>
        Anh không biết làm sao để mà anh thoát ra mau<br/>
        
        Anh vẫn thức giấc trên giường<br/>
        Với giấc mơ vừa tàn<br/>
        Bản nhạc vụt tắt<br/>
        Bộ phim kia dừng lại<br/>
        Nghe tiếng mưa rơi bên thềm<br/>
        Anh ngước mắt lặng nhìn<br/>
        Rồi chờ đợi mãi...Vẫn không quay lại<br/>
        
        Anh vẫn thức giấc trên giường<br/>
        Với giấc mơ vừa tàn<br/>
        Bản nhạc vụt tắt<br/>
        Bộ phim kia dừng lại<br/>
        Nghe tiếng mưa rơi bên thềm<br/>
        Anh ngước mắt lặng nhìn<br/>
        Rồi chờ đợi mãi...Vẫn không quay lại<br/>
        
        No no no .... baby let me know<br/>
        No no no .... baby let me know<br/>
        
        Nhìn xem lần sau cuối, là bao điều tiếc nuối<br/>
        Tình yêu là thứ khiến em quên đi vài lần yếu đuối<br/>
        Lặng nhìn giọt sương rơi...lạc trong màu u tối<br/>
        Là khi tình yêu ấy đã khiến em thôi những mộng mơ.`
    },
    {        
        idsontung : true,
        idVN : 1,
        songtop : 1,
        songid : 6,
        songimg : 'image/deponline-sontung.jpg',
        songouther : 'Sơn Tùng MTP',
        songname : 'Hãy Trao Cho Anh',
        songlink : 'list_song/Hãy Trao Cho Anh - Sơn Tùng M-TP, Snoop Dogg.mp3',
        lyric : `[Verse 1: Sơn Tùng M-TP]<br/>
        Hình bóng ai đó nhẹ nhàng vụt qua nơi đây<br/>
        Quyến rũ ngây ngất loạn nhịp làm tim mê say<br/>
        Cuốn lấy áng mây theo cơn sóng xô dập dìu<br/>
        Nụ cười ngọt ngào cho ta tan vào phút giây miên man quên hết con đường về eh<br/>
        (Let me know your name)<br/>
        Chẳng thể tìm thấy lối về eh<br/>
        (Let me know your name)<br/>
        Điệu nhạc hòa quyện trong ánh mắt đôi môi<br/>
        Dẫn lối những bối rối rung động khẽ lên ngôi<br/>
        (Và rồi khẽ, và rồi khẽ khẽ)<br/>
        <br/>
        [Pre-Chorus: Sơn Tùng M-TP]<br/>
        Chạm nhau mang vô vàn<br/>
        Đắm đuối vấn vương dâng tràn<br/>
        Lấp kín chốn nhân gian<br/>
        Làn gió hoá sắc hương mơ màng<br/>
        Một giây ngang qua đời<br/>
        Cất tiếng nói không nên lời<br/>
        Ấm áp đến trao tay ngàn sao trời<br/>
        Lòng càng thêm chơi vơi<br/>
        Dịu êm không gian bừng sáng<br/>
        Đánh thức muôn hoa mừng<br/>
        Quấn quít hát ngân nga từng<br/>
        Chút níu bước chân em dừng<br/>
        Bao ý thơ tương tư ngẩn ngơ (La la la)<br/>
        Lưu dấu nơi mê cung đẹp thẫn thờ (Oh, oh, oh)<br/>
        <br/>
        [Chorus: Sơn Tùng M-TP]<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh thứ anh đang mong chờ<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy mau làm điều ta muốn vào khoảnh khắc này đê<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao anh trao cho anh đi những yêu thương nồng cháy<br/>
        Trao anh ái ân nguyên vẹn đong đầy<br/>
        
        [Hook: Sơn Tùng M-TP]<br/>
        La la la, la la la la<br/>
        La la la, la la la la<br/>
        La la la, la la la la<br/>
        La la la, la la la la<br/>
        <br/>
        [Verse 2: Snoop Dogg]<br/>
        Lookin' at my Gucci, it's about that time<br/>
        We can smoke a blunt and pop a bottle of wine<br/>
        Now get yourself together and be ready by nine<br/>
        'Cause we gon' do some things that'll shatter your spine<br/>
        Come one, undone, Snoop Dogg, Son Tung<br/>
        Long Beach is the city that I come from<br/>
        So if you want some, get some<br/>
        Better enough take some, take some<br/><br/>
        
        [Pre-Chorus: Sơn Tùng M-TP]<br/>
        Chạm nhau mang vô vàn<br/>
        Đắm đuối vấn vương dâng tràn<br/>
        Lấp kín chốn nhân gian<br/>
        Làn gió hoá sắc hương mơ màng<br/>
        Một giây ngang qua đời<br/>
        Cất tiếng nói không nên lời<br/>
        Ấm áp đến trao tay ngàn sao trời<br/>
        Lòng càng thêm chơi vơi<br/>
        Dịu êm không gian bừng sáng<br/>
        Đánh thức muôn hoa mừng<br/>
        Quấn quít hát ngân nga từng<br/>
        Chút níu bước chân em dừng<br/>
        Bao ý thơ tương tư ngẩn ngơ<br/>
        Lưu dấu nơi mê cung đẹp thẫn thờ<br/>
        <br/>
        [Chorus: Sơn Tùng M-TP]<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh thứ anh đang mong chờ<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy mau làm điều ta muốn vào khoảnh khắc này đê<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao anh trao cho anh đi những yêu thương nồng cháy<br/>
        Trao anh ái ân nguyên vẹn đong đầy<br/>
        <br/>
        [Hook: Sơn Tùng M-TP]<br/>
        La la la, la la la la<br/>
        La la la, la la la la<br/>
        La la la, la la la la<br/>
        La la la, la la la la<br/>
        <br/>
        [Bridge: Sơn Tùng M-TP]<br/>
        Em cho ta ngắm thiên đàng vội vàng qua chốc lát<br/>
        Như thanh âm chứa bao lời gọi mời trong khúc hát<br/>
        Liêu xiêu ta xuyến xao rạo rực khát khao trông mong<br/>
        Dịu dàng lại gần nhau hơn dang tay ôm em vào lòng<br/>
        Trao đi trao hết đi đừng ngập ngừng che dấu nữa<br/>
        Quên đi quên hết đi ngại ngùng lại gần thêm chút nữa<br/>
        Chìm đắm giữa khung trời riêng hai ta như dần hòa quyện mắt nhắm mắt tay đan tay hồn lạc về miền trăng sao<br/>
        Em cho ta ngắm thiên đàng vội vàng qua chốc lát<br/>
        Như thanh âm chứa bao lời gọi mời trong khúc hát<br/>
        Liêu xiêu ta xuyến xao rạo rực khát khao trông mong<br/>
        Dịu dàng lại gần nhau hơn dang tay ôm em vào lòng<br/>
        Trao đi trao hết đi đừng ngập ngừng che dấu nữa<br/>
        Quên đi quên hết đi ngại ngùng lại gần thêm chút nữa<br/>
        Chìm đắm giữa khung trời riêng hai ta như dần hòa quyện mắt nhắm mắt tay đan tay hồn lạc về miền trăng sao(Leggo!)<br/>
        <br/>
        [Outro: Sơn Tùng M-TP]<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Cho anh, cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Cho anh, cho anh, cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Cho anh, cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh<br/>
        Hãy trao cho anh thứ anh đang mong chờ`
    },
    {        
        idVN : 1,
        songtop : 1,
        songid : 7,
        songimg : 'image/artworks-gjuwJety5q5z8W9x-uK95Lw-t500x500.jpg',
        songouther : 'WREN EVANS',
        songname : 'Thích Em Hơi Nhiều',
        songlink : 'list_song/WREN EVANS - THÍCH EM HƠI NHIỀU (OFFICIAL MUSIC VIDEO).mp3',
        lyric : `Biết là mình thích nhau<br/>

        Còn chuyện xa hơn thôi để tính sau<br/>
        
        Vờn nhau thôi không đúng đâu<br/>
        
        Dân chơi thì chơi là phải trúng<br/>
        
        Còn anh chỉ muốn chậm thôi, không cần quá liều<br/>
        
        Oh anh chưa muốn đâm đầu vậy đâu<br/>
        
        Anh chưa thiết tha nghĩ tới chuyện sau này<br/>
        
        Dù ba mẹ chờ mong, em biết không?<br/>
        
        Họ muốn có cháu bồng<br/>
        
        Chỉ cần ngồi với em chút thôi, được không?<br/>
        
        Nhìn vào đôi mắt em Thấy sao?<br/>
        
        Một thế giới màu hồng<br/>
        
        Dù môi đang cách nhau, cách nhau, một chút<br/>
        
        Nhưng mà vì anh chưa muốn phiêu, muốn phiêu<br/>
        
        Dù thích em hơi nhiều<br/>
        
        "Alo"<br/>
        
        "Baby anh đang đâu thế ?"<br/>
        
        Anh ngồi Xofa ở Tống Duy Tân, Ngay cạnh Puku, oke ?<br/>
        
        Với mấy đồng bọn nó rủ rê<br/>
        
        Qua nhà thằng Minh Khai không thật<br/>
        
        Cơ mà có hẹn với em anh bảo tối nay tao đi sinh nhật, thế nhá<br/>
        
        Nói thật anh đang bối rối khi nghĩ về ai<br/>
        
        Công việc dang dở chắc anh, phải chia ông Hiếu làm Hai<br/>
        
        Thích em hơi nhiều nên anh phải nghĩ sao nó vừa tai<br/><br/>
        
        
         
        Tại vì most of the time Em ở trong tâm trí anh hết thời gian<br/>
        
        Chỉ cần ngồi với em chút thôi, được không?<br/>
        
        Nhìn vào đôi mắt em Thấy sao?<br/>
        
        Một thế giới màu hồng<br/>
        
        Dù môi đang cách nhau, cách nhau, một chút<br/>
        
        Nhưng mà vì anh chưa muốn phiêu, muốn phiêu<br/>
        
        Dù thích em hơi nhiều<br/>
        
        Baby anh muốn thấy em trong tương lai gần`
    },
    {        
        idVN : 1,
        songtop : 1,
        songid : 8,
        songimg : 'image/ab67616d0000b2734be34a1e036c97d22b5392d5.jpg',
        songouther : 'Thịnh Suy',
        songname : 'Chuyện Rằng',
        songlink : 'list_song/CHUYỆN RẰNG.mp3',
        lyric : `Khi đêm ùa vào ôm chặt em<br/>
        Oh, I'm just a boy<br/>
        Chẳng thể là quá muộn khi nói lời yêu một người<br/>
        Chẳng thể là quá muộn khi ta hoài tiếc một đời<br/>
        Những lời yêu sao quá khó khăn<br/>
        Kìa những tháng năm dài ta đã cùng đi bên nhau<br/>
        Nhìn đóa môi em cười cho ta một vết thương sâu<br/>
        Những lời yêu sao quá khó khăn<br/>
        Chuyện rằng huh huh-huh-huh-huhh mơ màng<br/>
        Anh giam yêu dấu trong anh từng phút yên lặng<br/>
        Là từng câu hát "anh yêu em"<br/>
        Viết ra không tên<br/>
        Khi đêm đen về<br/>
        Chuyện rằng năm tháng cứ trôi chẳng thấy, quay lại<br/>
        Tại sao anh vẫn đau khi nhìn thấy, em bên ai<br/>
        Liệu rằng câu hát "anh yêu em"<br/>
        Sẽ đến bên em?<br/>
        Khi đêm ùa vào ôm chặt em<br/>
        Oh, I'm just a boy<br/>
        Tìm thấy nhau cả rồi nhưng trong lòng vẫn chơi vơi<br/>
        Thả tiếng yêu không lời trôi theo ngọn gió muôn nơi<br/>
        Những lời yêu sao quá khó khăn<br/>
        Chuyện rằng huh-huh-huh-huh-huh mơ màng<br/>
        Anh giam yêu dấu trong anh từng phút yên lặng<br/>
        Là từng câu hát "anh yêu em"<br/>
        Viết ra không tên<br/>
        Khi đêm đen về<br/>
        Chuyện rằng năm tháng cứ trôi chẳng thấy, quay lại<br/>
        Tại sao anh vẫn đau khi nhìn thấy, em bên ai<br/>
        Liệu rằng câu hát "anh yêu em"<br/>
        Sẽ đến bên em?<br/>
        Khi đêm ùa vào ôm chặt em<br/>
        Ngập ngừng lời yêu, la la love<br/>
        Có phải quá trễ để trao về em không, la la love<br/>
        Có phải tiếng khóc cô đơn vì em, la la love<br/>
        Đã đến lúc hát lên câu ca này<br/>
        Ngập ngừng lời yêu, la la love<br/>
        Chẳng thể quá trễ để trao về em đâu, la la love<br/>
        Chẳng còn tiếng khóc cô đơn vì em, la la love<br/>
        Đã đến lúc hát lên câu ca này<br/>
        Chuyện rằng huh-huh-huh-huh-huhh mơ màng<br/>
        Anh trao yêu dấu trong anh từng phút yên bình<br/>
        Để từng câu hát "anh yêu em"<br/>
        Sẽ đến bên em<br/>
        Khi đêm đen về<br/>
        Chuyện rằng năm tháng cứ trôi chẳng thấy, quay lại<br/>
        Và chẳng hối tiếc khi có nhìn thấy em bên ai<br/>
        Để từng câu hát "anh yêu em"<br/>
        Sẽ đến bên em<br/>
        Khi đêm ùa vào ôm chặt em<br/>
        Oh, I'm just a boy`
    },
    {
        idVN : 1,
        songimg : 'image/1574233414436_640.jpg',
        songouther : 'Trọng Hiếu',
        songname : 'Em Là Bà Nội Của Anh',
        songlink : 'list_song/Em-La-Ba-Noi-Cua-Anh-Trong-Hieu.mp3',
        lyric : `Vợ ơi You knock me out<br/>
        Vợ ơi You knock me out<br/>
        You let me down<br/><br/>
        
        Xinh chưa Baby em hãy nghe bài hát<br/>
        Anh viết cho em<br/>
        Bằng những lời ca từ trái tim<br/>
        Ây dô, Ây dô<br/>
        Hãy lắng nghe một chút thôi, một chút thôi<br/>
        Xinh chưa Chưa một giây nào anh để quên<br/>
        Hạnh phúc cho anh chỉ riêng mình em, mình em<br/>
        Ây dô, Ây dô<br/>
        You can say no, no, no no no<br/><br/>
        
        Lỡ hôm nay trời nắng to<br/>
        Chỉ cần em muốn xem mưa đừng có lo<br/>
        Và nếu đêm khuya nhiều lắng lo<br/>
        Anh sẽ kéo mặt trời lên cho<br/>
        Xinh chưa<br/><br/>
        
        Anh yêu em đến điên đầu<br/>
        Mà anh lại thấy như thế nó rất ngầu<br/>
        Dù là anh giờ đây phải hóa thành bé con<br/>
        Anh vẫn chỉ yêu bà nội của anh thôi<br/>
        Xinh chưa<br/>
        Anh yêu em đến điên đầu<br/>
        Mà anh chẳng muốn thấy em phải âu sầu<br/>
        Nàng là mây là mưa là sao là gió bay<br/>
        Okey em, em là bà nội của anh<br/>
        Em là bà nội của anh<br/>
        Bà nội bà nội của anh<br/>
        <br/>
        Yêu anh không lo<br/>
        Chỉ cần ăn no dù có tròn vo<br/>
        Thì anh chẳng hề đắn đo<br/>
        Buồn buồn thì hét thật to<br/>
        Lỡ mà có đau họng rồi ho<br/>
        Thì cũng đã có anh lo<br/>
        Anh bay ra đường mua thuốc về ngay cho<br/>
        Em yêu anh không nà<br/>
        Tin anh đi em ah<br/>
        Anh chỉ yêu ai thương ai tin ai<br/>
        Như khi bên em đâu nà<br/>
        Khà khà khà khà khà khà<br/>
        <br/>
        Anh luôn mong sao ta yêu nhau<br/>
        Luôn bên nhau cho tới khi ta chung nhà`
    },
    {
        idVN : 1,
        songimg : 'image/6159907218426491106_mq.jpg',
        songouther : 'Đen',
        songname : 'Trốn Tìm',
        songlink : 'list_song/Đen - Trốn Tìm ft. MTV band (M_V).mp3',
        lyric : `[Chorus: MTV]<br/>
        Có một cái cây trong một cái vườn<br/>
        Trên những tán cây nở rộ những đóa hoa<br/>
        Có hai đứa nhóc đang chơi trốn tìm<br/>
        Tìm hoài tìm mãi nên quên lối về<br/><br/>
        
        [Verse 1: Đen]<br/>
        Anh đi tìm thì em trốn, anh đi trốn em không tìm<br/>
        Lòng em không gợn sóng, cuối cùng anh mất công chìm<br/>
        Nếu mà có cây búa anh sẽ nện cho bõ công<br/>
        Vì nhớ nhung đặc quánh giờ nó khô thành bê tông<br/>
        Chúng ta rồi sẽ có, có những chuyến đi dài<br/>
        Phải tự học lấy mọi thứ vì trong “tình trường” làm biếng ghi bài<br/>
        Câu chuyện của chúng ta bỗng có thêm một miếng bi hài<br/>
        Vì cách mà em gọi anh, không có "u" và thiếu "y dài" (Ê)<br/>
        Phía xa thành phố người ta đã bật đèn đường<br/>
        Hương xưa quen làm anh thấy thật thèm thuồng<br/>
        Nỗi buồn vàng rực cứ như là chứa đồng thau<br/>
        Hệt như là Beckham vậy, em chỉ giỏi cứa lòng nhau<br/>
        Hé cửa sổ ra mà xem<br/>
        Có một chàng thi sĩ đứng ở ngay nhà em<br/>
        Viết nhạc tình mát ngọt tựa như cây cà rem<br/>
        Anh ta sẽ đứng ở nơi đây cả đêm<br/><br/>
        
        [Chorus: MTV, Biên]<br/>
        Có hai cái cây trong một cái vườn<br/>
        (Có hai cái cây trong vườn)<br/>
        Trên những tán cây nở rộ những đóa hoa<br/>
        (Những đoá hoa trên cành)<br/>
        Có hai đứa nhóc đang chơi trốn tìm<br/>
        (Có hai đứa nhóc đang chơi)<br/>
        Tìm hoài tìm mãi nên quên lối về<br/><br/>
        
        [Verse 2: Đen, MTV, Cả hai]<br/>
        Hồi đó anh rụt rè như đám cây mắc cỡ<br/>
        Gần em làm anh hồi hộp tới mức gây tắc thở<br/>
        Ta đều không biết có điều gì sau đám mây sắp nở<br/>
        Trò chơi trốn tìm ngày đó, sau này đầy trắc trở<br/>
        Ta săn bắn những khát vọng và hái lượm những giấc mơ<br/>
        Ta gieo trồng cây ước mộng, thứ mà lấy đi nhiều thì giờ<br/>
        Ta đào những cái hố mà không biết có ngày bị lọt<br/>
        Để rất lâu sau này chúng ta cau mày nhận ra không phải tất cả bông hoa thì đều sẽ có những nhuỵ ngọt<br/>
        Gọi tên em làm anh mất giọng hoài<br/>
        Hệt như là một giấc mộng dài<br/>
        Ta đi tìm cả thế giới nhưng mà lại trốn nhau<br/>
        Biết vậy thà nghỉ chơi từ lúc mới chớm đau<br/>
        Người đi tìm cái người đi trốn, người đi trốn cái người đi tìm<br/>
        Tình yêu từ những ngày xưa đã ngủ quên dưới tán cây im lìm<br/>
        <br/>
        [Chorus: MTV]<br/>
        Có 3 cái cây trong một cái vườn<br/>
        Trên những tán cây nở rộ những đóa hoa<br/>
        Có hai đứa nhóc đang chơi trốn tìm<br/>
        Tìm hoài tìm mãi nên quên lối về<br/>
        <br/>
        [Bridge: MTV]<br/>
        Ai đó đã chặt hết cây và cũng chẳng thấy vườn (chẳng thấy cây trong vườn)<br/>
        Ai đó đã xây một ngôi nhà rất to (chặt hết cây đi rồi)<br/>
        Chắc em hạnh phúc yên vui với người<br/>
        (Chắc em hạnh phúc yên vui)<br/>
        Nhà em có chó anh không dám vào<br/>
        <br/>
        [Verse 3: MTV]<br/>
        Niềm cô đơn của những người trưởng thành<br/>
        Là khi muốn trốn nhưng không ai tìm<br/>
        Nhiều khi ta muốn ta được bé lại<br/>
        Để khi đi trốn có người đi tìm<br/>
        Nhiều khi ta muốn ta được bé lại<br/>
        Để khi đi trốn có người đi tìm`
    },
    {
        idKOREA : 1,
        idNewSong:4,
        idBP:1,
        songimg : 'image/lalisa.jpg',
        songouther : 'LISA',
        songname : 'LALISA',
        songlink : `list_song/LISA - 'LALISA' M_V.mp3`,
        lyric :`Nae dwismoseubman bwado aljanha<br/>
        Eoduwojil ttae bunhongbichina<br/>
        Saehayan jomyeongi nal kkaeumyeon<br/>
        Beonjjeogbeonjjeog sesangeul heundeuleo<br/><br/>
        Meolileul hayahge biunchae<br/>
        Sikkeuleon gamjeongeun taeullae<br/>
        Burn burn burn<br/>
        Geuttae nan ne galjeungeul haesohal syampein<br/><br/>
        Sip sip naleul deulikyeo<br/>
        Geulae deo jeo nopi nae body baddeuleo<br/>
        Want you to ring the alarm<br/>
        Sesangege allyeo nae ileumeda ibmajchwo<br/>
        Say Lalisa love me Lalisa love me<br/>
        Call me Lalisa love me Lalisa love me<br/>
        Aljanha attitude<br/>
        Mwol deo eojjeolagu<br/>
        The loudest in the room<br/><br/>
        Just Say Lalisa love me Lalisa love me<br/>
        Call me Lalisa love me Lalisa love me<br/>
        Aljanha attitude<br/>
        Mwol deo eojjeolagu<br/>
        The loudest in the room<br/><br/>        
        Baby get the megaphone<br/>
        Put it on speaker<br/>
        I said I can’t hear you<br/>
        So you need to speak up<br/>
        Put that shiz on stereo<br/>
        Everyone else on very low<br/><br/>
        Protect it like a barrier<br/>
        Promise there’s nothing scarier<br/>
        Than me if anybody coming gunnin for my man<br/>
        Gonna catch a case<br/>
        Gun up in my hand<br/>
        Bam bam bam<br/>
        Hit after hit though<br/>
        Rocks in my wrist so I call em the flintstones<br/><br/>
        Ring the alarm<br/>
        Sesangege allyeo nae ileumeda ibmajchwo<br/><br/>
        Say Lalisa love me Lalisa love me<br/>
        Call me Lalisa love me Lalisa love me<br/>
        Aljanha attitude<br/>
        Mwol deo eojjeolagu<br/>
        The loudest in the room<br/><br/>       
        Just Say Lalisa love me Lalisa love me<br/>
        Call me Lalisa love me Lalisa love me<br/>
        Aljanha attitude<br/>
        Mwol deo eojjeolagu<br/>
        The loudest in the room<br/><br/>
        Nuguwado bigyo moshae geulaebwassja you gon’ still love me<br/>
        You need some L.A.L.I.S.A<br/><br/>
        Jigeum neoui du nun ape seoissneun nae ileumeul gieoghae<br/>
        Love you some L.A.L.I.S.A<br/><br/>
        You cannot see me eotteohge haneunji da boyeojwodo<br/>
        Taegugeseo hangug geochyeo yeogikkaji went for the throat<br/>
        Being the greatest of all time ain’t fantasy<br/>
        Saekkaman pingkeubich wanggwan belongs to we<br/>
        Lalisa Lalisa Lalisa haneul wi dangdanghae<br/>
        Lalisa Lalisa Lalisa jeodeuleun nal wonhae<br/>
        Lalisa Lalisa Lalisa catch me if you can<br/>
        Lalisa Lalisa Lalisa Lalisa Lalisa<br/><br/>
        Say Lalisa love me Lalisa love me<br/>
        Call me Lalisa love me Lalisa love me<br/>
        Aljanha attitude<br/>
        Mwol deo eojjeolagu<br/>
        The loudest in the room<br/>
        Just Say Lalisa love me Lalisa love me<br/>
        Call me Lalisa love me Lalisa love me<br/>
        Aljanha attitude<br/>
        Mwol deo eojjeolagu<br/>
        The loudest in the room`
    },
    {
        idUS : 1,
        songimg : 'image/71R0KA284rL._SS500_.jpg',
        songouther : 'Pink Sweat',
        songname : 'At My Worst',
        songlink : 'list_song/Pink Sweat$ - At My Worst (Official Video).mp3',
        lyric : `[Verse 1]<br/>
        Can I call you baby? Can you be my friend?<br/>
        Can you be my lover up until the very end?<br/>
        Let me show you love, oh, no pretend<br/>
        Stick by my side even when the world is caving in, yeah<br/><br/>
        
        [Pre-Chorus]<br/>
        Oh, oh, oh, don't, don't you worry<br/>
        I'll be there whenever you want me<br/><br/>
        
        [Chorus]<br/>
        I need somebody who can love me at my worst<br/>
        Know I'm not perfect, but I hope you see my worth<br/>
        'Cause it's only you, nobody new, I put you first<br/>
        And for you, girl, I swear I'd do the worst<br/><br/>
        
        [Post-Chorus]<br/>
        Ooh, ooh-ooh<br/>
        Ooh-ooh-ooh, ooh-ooh-ooh-ooh
        <br/><br/>
        [Verse 2]<br/>
        If you stay forever, let me hold your hand<br/>
        I can fill those places in your heart no one else can<br/>
        Let me show you love, oh, no pretend, yeah<br/>
        I'll be right here, baby, you know it's sink or swim<br/>
        <br/>
        [Pre-Chorus]<br/>
        Oh, oh, oh, don't, don't you worry<br/>
        I'll be there whenever you want me<br/>
        <br/>
        [Chorus]<br/>
        I need somebody who can love me at my worst<br/>
        Know I'm not perfect, but I hope you see my worth, yeah<br/>
        'Cause it's only you, nobody new, I put you first (You first)<br/>
        And for you, girl, I swear I'd do the worst<br/>
        <br/>
        [Post-Chorus]<br/>
        Ooh, ooh-ooh<br/>
        Ooh-ooh-ooh, ooh-ooh-ooh-ooh<br/>
        Ooh-ooh-ooh, ooh, ooh-ooh<br/>
        Ooh-ooh-ooh, ooh-ooh-ooh-ooh<br/>
        <br/>
        [Outro]<br/>
        I need somebody who can love me at my worst<br/>
        Know I'm not perfect, but I hope you see my worth<br/>
        'Cause it's only you, nobody new, I put you first<br/>
        And for you, girl, I swear I'd do the worst`
    },
    {        
        idUS : 1,
        songimg : 'image/artworks-000492215712-5puwh8-t500x500.jpg',
        songouther : 'Jeremy Zucker',
        songname : 'Comethru',
        songlink : 'list_song/Jeremy Zucker - comethru (Official Video).mp3',
        lyric : `[Verse 1]<br/>
        I might lose my mind<br/>
        Waking when the sun's down<br/>
        Riding all these highs<br/>
        Waiting for the comedown<br/>
        Walk these streets with me<br/>
        I'm doing decently<br/>
        Just glad that I can breathe, yeah<br/><br/>
        
        [Pre-Chorus]<br/>
        I'm trying to realize<br/>
        It's alright to not be fine on your own<br/><br/>
        
        [Chorus]<br/>
        Now I'm shaking, drinking all this coffee<br/>
        These last few weeks have been exhausting<br/>
        I'm lost in my imagination<br/>
        And there's one thing that I need from you<br/><br/>
        
        [Hook]<br/>
        Can you come through, through<br/>
        Through, yeah<br/>
        And there's one thing that I need from you<br/>
        Can you come through?<br/>
        <br/>
        [Verse 2]<br/>
        Ain't got much to do<br/>
        Too old for my hometown<br/>
        Went to bed at noon<br/>
        Couldn't put my phone down<br/>
        Scrolling patiently<br/>
        It's all the same to me<br/>
        Just faces on a screen, yeah<br/>
        <br/>
        [Pre-Chorus]<br/>
        I'm trying to realize<br/>
        It's alright to not be fine on your own<br/><br/>
        
        [Chorus]<br/>
        Now I'm shaking, drinking all this coffee<br/>
        These last few weeks have been exhausting<br/>
        I'm lost in my imagination<br/>
        And there's one thing that I need from you<br/>
        <br/>
        [Hook]<br/>
        Can you come through, through<br/>
        Through, yeah<br/>
        And there's one thing that I need from you<br/>
        Can you come through, through<br/>
        Through, yeah<br/>
        And there's one thing that I need from you<br/>
        Can you come through?`
    },
    {   
        idNewSong:5,    
        idjustin : true, 
        idUS : 1,
        songimg : 'image/ab67616d0000b27341e31d6ea1d493dd77933ee5.jpg',
        songouther : 'TheKidLAROI - JustinBieber',
        songname : 'Stay',
        songlink : 'list_song/Stay-TheKidLAROIJustinBieber-7045258.mp3',
        lyric : `[Chorus: The Kid LAROI]<br/>
        I do the same thing I told you that I never would<br/>
        I told you I'd change, even when I knew I never could<br/>
        I know that I can’t find nobody else as good as you<br/>
        I need you to stay, need you to stay, hey (Oh)<br/>
        <br/>
        [Verse 1: The Kid LAROI]<br/>
        I get drunk, wake up, I'm wasted still<br/>
        I realize the time that I wasted here<br/>
        I feel like you can't feel the way I feel<br/>
        Oh, I’ll be fucked up if you can't be right here<br/>
        <br/>
        [Pre-Chorus: The Kid LAROI]<br/>
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br/>
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br/>
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br/>
        Oh, I'll be fucked up if you can't be right here<br/>
        <br/>
        [Chorus: The Kid LAROI]<br/>
        I do the same thing I told you that I never would<br/>
        I told you I'd change, even when I knew I never could<br/>
        I know that I can't find nobody else as good as you<br/>
        I need you to stay, need you to stay, hey<br/>
        I do the same thing I told you that I never would<br/>
        I told you I'd change, even when I knew I never could<br/>
        I know that I can't find nobody else as good as you<br/>
        I need you to stay, need you to stay, hey<br/>
        <br/>
        [Verse 2: Justin Bieber]<br/>
        When I’m away from you, I miss your touch (Ooh)<br/>
        You’re the reason I believe in love<br/>
        It's been difficult for me to trust (Ooh)<br/>
        And I’m afraid that I'ma fuck it up<br/>
        Ain't no way that I can leave you stranded<br/>
        'Cause you ain’t ever left me empty-handed<br/>
        And you know that I know that I can't live without you<br/>
        So, baby, stay<br/>
        <br/>
        [Pre-Chorus: Justin Bieber, The Kid LAROI & Both]<br/>
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br/>
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br/>
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)<br/>
        I'll be fucked up if you can't be right here<br/>
        <br/>
        [Chorus: The Kid LAROI with Justin Bieber]<br/>
        I do the same thing I told you that I never would<br/>
        I told you I'd change, even when I knew I never could<br/>
        I know that I can't find nobody else as good as you<br/>
        I need you to stay, need you to stay, hey<br/>
        I do the same thing I told you that I never would<br/>
        I told you I'd change, even when I knew I never could<br/>
        I know that I can't find nobody else as good as you<br/>
        I need you to stay, need you to stay, hey<br/>
        <br/>
        [Outro: The Kid LAROI & Justin Bieber]<br/>
        Woah-oh<br/>
        I need you to stay, need you to stay, hey`
    },
    {        
        idNewSong:6,
        idjustin : true,
        idUS : 1,
        songimg : 'image/E3QFqZUXEAIr96D.jpg',
        songouther : 'Justin Bieber',
        songname : 'Peaches',
        songlink : 'list_song/Peaches-JustinBieberDanielCaesarGiveon-6997601.mp3',
        lyric : `[Chorus: Justin Bieber]<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That's that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that’s it)<br/><br/>
        
        [Verse 1: Justin Bieber]<br/>
        And I see you (Oh), the way I breathe you in (In)<br/>
        It's the texture of your skin<br/>
        I wanna wrap my arms around you, baby<br/>
        Never let you go, oh<br/>
        And I say, oh, there's nothing like your touch<br/>
        It’s the way you lift me up, yeah<br/>
        And I'll be right here with you 'til the end<br/>
        <br/>
        [Chorus: Justin Bieber]<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That's that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that's it)<br/>
        <br/>
        [Verse 2: Daniel Caesar]<br/>
        You ain't sure yet, but I'm for ya'<br/>
        All I could want, all I can wish for<br/>
        Nights alone that we miss more<br/>
        And days we save as souvenirs<br/>
        There’s no time, I wanna make more time<br/>
        And give you my whole life<br/>
        I left my girl, I’m in my Yorker<br/>
        Hate to leave her, call it torture<br/>
        Remember when I couldn't hold her<br/>
        Left the baggage for a mover<br/>
        <br/>
        [Chorus: Justin Bieber]<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That’s that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that's it)<br/>
        <br/>
        [Verse 3: GIVEON]<br/>
        I get the feeling, so I'm sure (Sure)<br/>
        Hand in my hand because I'm yours<br/>
        I can’t, I can't pretend, I can't ignore you're right for me<br/>
        Don't think you wanna know just where I've been, oh<br/>
        Don't be distracted<br/>
        The one I need is right in my arms (Oh)<br/>
        Your kisses taste the sweetest with mine<br/>
        And I'll be right here with you 'til end of time<br/>
        <br/>
        [Chorus: Justin Bieber]<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That's that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that's it)<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That's that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that's it)<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That's that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that's it)<br/>
        I got my peaches out in Georgia (Oh, yeah, shit)<br/>
        I get my weed from California (That's that shit)<br/>
        I took my chick up to the North, yeah (Badass bitch)<br/>
        I get my light right from the source, yeah (Yeah, that's it)`
    },
    {        
        idUS : 1,
        songimg : 'image/MV5BNmNmNGExNDctM2Q3MC00MTU5LTkyYzMtMzMyYmI2MTA3MjU3XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg',
        songouther :'Maroon 5',
        songname : 'Girls Like You',
        songlink : 'list_song/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video).mp3',
        lyric : `[Verse 1]
        Spent 24 hours, I need more hours with you<br/>
        You spent the weekend getting even, ooh<br/>
        We spent the late nights making things right between us<br/><br/>
        
        [Pre-Chorus]<br/>
        But now it's all good, babe<br/>
        Roll that Backwood, babe<br/>
        And play me close<br/>
        <br/>
        [Chorus]
        'Cause girls like you run 'round with guys like me<br/>
        'Til sundown when I come through<br/>
        I need a girl like you, yeah yeah<br/>
        Girls like you love fun, and yeah, me too<br/>
        What I want when I come through<br/>
        I need a girl like you, yeah yeah<br/>
        <br/>
        [Post-Chorus]<br/>
        Yeah yeah yeah, yeah yeah yeah<br/>
        I need a girl like you, yeah yeah<br/>
        Yeah yeah yeah, yeah yeah yeah<br/>
        I need a girl like you<br/>
        <br/>
        [Verse 2]
        I spent last night on the last flight to you<br/>
        Took a whole day up tryna get way up, ooh<br/>
        We spent the daylight tryna make things right between us<br/>
        <br/>
        [Pre-Chorus]
        But now it's all good, babe<br/>
        Roll that Backwood, babe<br/>
        And play me close<br/>
        <br/>
        [Chorus]
        'Cause girls like you run 'round with guys like me<br/>
        'Til sundown when I come through<br/>
        I need a girl like you, yeah yeah<br/>
        Girls like you love fun, and yeah, me too<br/>
        What I want when I come through<br/>
        I need a girl like you, yeah yeah<br/>
        <br/>
        [Post-Chorus]
        Yeah yeah yeah, yeah yeah yeah<br/>
        I need a girl like you, yeah yeah<br/>
        Yeah yeah yeah, yeah yeah yeah<br/>
        I need a girl like you, yeah yeah<br/>
        I need a girl like you, yeah yeah<br/>
        I need a girl like you<br/>
        <br/>
        [Bridge]
        Maybe it's 6:45<br/>
        Maybe I'm barely alive<br/>
        Maybe you've taken my shit for the last time (yeah)<br/>
        Maybe I know that I'm drunk<br/>
        Maybe I know you're the one<br/>
        Maybe you're thinking it's better if you drive<br/>
        <br/>
        [Chorus]
        Oh, 'cause girls like you run 'round with guys like me<br/>
        'Til sundown when I come through<br/>
        I need a girl like you, yeah<br/>
        'Cause girls like you run 'round with guys like me<br/>
        'Til sundown when I come through<br/>
        I need a girl like you, yeah yeah<br/>
        Girls like you love fun, and yeah, me too<br/>
        What I want when I come through<br/>
        I need a girl like you, yeah yeah<br/>
        <br/>
        [Post-Chorus]<br/>
        Yeah yeah yeah, yeah yeah yeah<br/>
        I need a girl like you, yeah yeah<br/>
        Yeah yeah yeah, yeah yeah yeah<br/>
        I need a girl like you`
    },
    {        
        idUS : 1,
        songimg : 'image/1622427158959_640.jpg',
        songouther : 'Dhruv',
        songname : 'DoubleTake',
        songlink : 'list_song/DoubleTake-Dhruv-7016375.mp3',
        lyric : `I could say I never dare<br/>
        To think about you in that way, but<br/>
        I would be lying<br/>
        And I pretend I'm happy for you<br/>
        When you find some dude to take home<br/>
        But I won't deny that<br/>
        
        In the midst of the crowds<br/>
        In the shapes in the clouds<br/>
        I don't see nobody but you<br/>
        In my rose-tinted dreams<br/>
        Wrinkled silk on my sheets<br/>
        I don't see nobody but you<br/>
        
        Boy, you got me hooked onto something<br/>
        Who could say that they saw us coming?<br/>
        Tell me, do you feel the love?<br/>
        Spend the summer of a lifetime with me<br/>
        Let me take you to the place of your dreams<br/>
        Tell me, do you feel the love?<br/>
        
        And I could say I never answered<br/>
        Those believers inside my head<br/>
        But that's far from the truth<br/>
        Don't know what's come over me<br/>
        It seems like yesterday when I said<br/>
        We'll be friends forever<br/>
        
        Constellations of stars<br/>
        Murals on city walls<br/>
        I don't see nobody but you<br/>
        You're my vice, you're my muse<br/>
        You're a nineteenth-floor view<br/>
        I don't see nobody but you<br/>
        
        Boy, you got me hooked onto something<br/>
        Who could say that they saw us coming?<br/>
        Tell me, do you feel the love?<br/>
        Spend the summer of a lifetime with me<br/>
        Let me take you to the place of your dreams<br/>
        Tell me, do you feel the love?<br/>
        
        Boy, you got me hooked onto something<br/>
        Who could say that they saw us coming?<br/>
        Tell me, do you feel the love?<br/>
        Spend the summer of a lifetime with me<br/>
        Let me take you to the place of your dreams<br/>
        Tell me, do you feel the love?<br/>
        
        Do you feel the love?<br/>
        Do you feel the love?<br/>
        Do you feel the love?<br/>
        Do you feel the love?<br/>
        Feel the love<br/>
        Do you feel the love?`
    },
    {        
        idUS : 1,
        songimg : 'image/artworks-000606602386-58veao-t500x500.jpg',
        songouther : 'Charlie Puth',
        songname : 'Cheating on You',
        songlink : 'list_song/Charlie Puth - Cheating on You [Official Video] (1).mp3',
        lyric : `[Verse 1]
        It started with a kiss<br/>
        On your mama's couch<br/>
        2012 was nothing serious<br/>
        And then we caught the feels<br/>
        It got really real<br/>
        Too good to be true<br/>
        I guess I thought you was, yeah<br/>
        <br/>
        [Pre-Chorus]
        Why did I run away, run away, run away?<br/>
        Oh, your love was everything, everything, everything<br/>
        I know it's gettin' late, gettin' late, gettin' late<br/>
        But can I still be on my way, on my way? Yeah<br/>
        <br/>
        [Chorus]
        I know I said goodbye and, baby, you said it too<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        I thought that I'd be better when I found someone new<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        <br/>
        [Post-Chorus]
        Baby, no, oh, cheating on you<br/>
        Baby, no<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        <br/>
        [Verse 2]
        Thought I could get you back any time of day<br/>
        Shouldn't have been so cocky<br/>
        Shouldn't have did you wrong (Woah)<br/>
        And now I miss you bad, really, really bad<br/>
        Guess you don't know what you got until it's gone<br/>
        <br/>
        [Pre-Chorus]
        Why did I run away, run away, run away? (Run away)<br/>
        Oh, your love was everything, everything, everything (Everything)<br/>
        I know it's gettin' late, gettin' late, gettin' late (Gettin' late)<br/>
        But can I still be on my way, on my way? Yeah<br/>
        <br/>
        [Chorus]
        I know I said goodbye and, baby, you said it too<br/>
        (You said it too, baby)<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        (Cheating on you)<br/>
        I thought that I'd be better when I found someone new (Ooh)<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        <br/>
        [Post-Chorus]
        Baby, no, oh, cheating on you<br/>
        Baby, no<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        <br/>
        [Bridge]
        Baby, no<br/>
        There ain't no lips like your lips<br/>
        And nobody else feels like this<br/>
        There's no moving on, I'll admit<br/>
        If you go away, yeah<br/>
        <br/>
        [Chorus]
        I know I said goodbye and, baby, you said it too<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        (Cheating on you)<br/>
        I thought that I'd be better when I found someone new<br/>
        (Found someone new)<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        (Believe it, baby)
        <br/><br/>
        [Post-Chorus]
        Baby, no, oh, cheating on you (I said goodbye, but I'm still in love)<br/>
        Baby, no (I said goodbye, but I'm still in love)<br/>
        But when I touch her, I feel like I'm cheating on you<br/>
        <br/>
        [Outro]
        I said goodbye<br/>
        And you said goodbye`
    }
];
var play_song = false;
var i = 0;
var israndom = false;
var isrestar = false;
var isVolume = false;

var pagelistSong = $('.page-list_song');
// render page list song
function render () {
    var htmls = songlist.map(function (song, index) {
        return `       
        <div class="list-song_card ${index === i ? 'active6' : ''}" data-index="${index}">
            <div class="list-song-card-img">
                <img src="${song.songimg}" class="img-list-song_card" alt="">
                <div class="icon-active-lopphu">
                    <img src="image/icon-playing.gif" class="img-icon-active" alt="">
                </div>
                <div class="list-song-card-lopphu">
                    <ion-icon name="play-outline"></ion-icon>  
                </div>
            </div>
            <div class="popular-song-data">
                <span class="popular-song-name">${song.songname}</span>
                <span class="popular-song-outher">${song.songouther}</span>
            </div>
        </div>
        `;
    }
    )
    pagelistSong.innerHTML = htmls.join('')
}
render();

// render page new song
var pagesongNew = $('.page-new-cards');
function renderNew () {
    var htmls = songlist.map(function (song, index) {
    
        if(song.idNewSong) {
            return `
            <div class="page-new-card" data-index="${index}">
                <div class="page-new-card-data">
                    <span class="number number1">${song.idNewSong}</span>
                    <span class="dau-gach">-</span>
                    <div class="list-song-card-img">
                        <img src="${song.songimg}" alt="">
                        <div class="list-song-card-lopphu">
                            <ion-icon name="play-outline"></ion-icon>  
                        </div>
                    </div>                            
                    <div class="popular-song-data">
                        <span class="popular-song-name">${song.songname}</span>
                        <span class="popular-song-outher">${song.songouther}</span>
                    </div>
                </div>
                <span class="new-time timeEnd">00:00</span>
                <div class="page-new-card-option">
                    <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                    <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                </div>                        
            </div>
            `;
        }

    })
    pagesongNew.innerHTML = htmls.join('');

}
renderNew();

// render home top music
var musichomeTop = $('.top-list-music');
function renderhomeTop () {
    var htmls = songlist.map(function (song , index) {
        if(song.songtop) {
            return `
            <div class="music-card" data-index="${index}">
                <img src="${song.songimg}" alt="">
            </div>
            `
        }
    })
    musichomeTop.innerHTML = htmls.join('');
}
renderhomeTop();


// render home popular music
var musichomePopular = $('.list-popular');
function renderhomePopular () {
    var htmls = songlist.map(function (song , index) {
        if(song.songid) {
            return `
            <div class="popular-card" data-index="${index}">
                <div class="popular-left">
                    <ion-icon name="play-outline"></ion-icon>
                    <img src="${song.songimg}" alt="">    
                    <div class="popular-song-data">
                        <span class="popular-song-name">${song.songname}</span>
                        <span class="popular-song-outher">${song.songouther}</span>
                    </div>
                </div>
                <div class="popular-right">
                    <span>04:21</span>
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </div>
            </div>
            `
        }
    })
    musichomePopular.innerHTML = htmls.join('');
}
renderhomePopular();

// render home new song musci
var musichomeNew = $('.list-new-song');
function renderhomeNew () {
    var htmls = songlist.map(function (song, index) {
        if(song.songid) {
            return `
            <div class="new-song-card" data-index="${index}">
                <img src="${song.songimg}" alt="">
                <span class="new-song-name">${song.songname}</span>
                <span class="new-song-outher">${song.songouther}</span>    
            </div>
            `
        }
    })
    musichomeNew.innerHTML = htmls.join('');
}
renderhomeNew();

function renderlyric () {
    var htmllyric = songlist.map((song,index) => {
        return `
        <div class="lyric-first ${index === i ? 'active7' : ''}" data-index="${index}">
            <span>
                ${song.lyric}
            </span>
        </div>
        `
    })
    lyricson.innerHTML = htmllyric.join('')
}
renderlyric();

// tạo cd quay
var cd_thump = cdthump.animate([
    {
        transform : "rotate(360deg)"
    }
],
{
    duration : 10000,
    iterations : Infinity //quay vô hạn
})

// khi vào thì cd không quay
 cd_thump.pause();



// playpause song
btnplaypause.onclick = function () {
    if(play_song){
        pausesong();
        // $('.ani-song').style.opacity = 0;
    }
    else{
        playsong();
        // $('.ani-song').style.opacity = 1;
    }
};


// play song
function playsong () {
    play_song =true;
    audio.play();
    btnplayon.classList.add('activeof');
    btnplayoff.classList.remove('activeof');
    cd_thump.play()
}

// pause song
function pausesong () {
    play_song =false;
    audio.pause();
    btnplayon.classList.remove('activeof');
    btnplayoff.classList.add('activeof');
    cd_thump.pause()
}



// load danh sách bài hát
function loadsong (songlist) {
    namesong.textContent = songlist.songname;
    outher.textContent = songlist.songouther;
    $('.namesong-lyric').textContent = songlist.songname;
    $('.outhersong-lyric').textContent = songlist.songouther;
    cdthump.src = songlist.songimg;
    $('.img-lyric').src = songlist.songimg;
    audio.src = songlist.songlink;
}

// điểm hiện tại
loadsong(songlist[i]);


// prev bài hát
btnprev.onclick = function () {
    if(israndom) {
        playrandom();
        playsong();
        // $('.ani-song').style.opacity = 1;
    }
    else{
        prev();
        playsong();
        // $('.ani-song').style.opacity = 1;
    }
    render();
    renderNew();
    renderhomeNew();
    renderhomePopular();
    renderhomeTop();
    renderlyric();
}
function prev () {
    i--;
    if(i < 0) {
        i = songlist.length -1;
    }
    loadsong(songlist[i]);
}// btnprev.addEventListener('click', prev);


// next bài hát
btnnext.onclick = function () {
    if(israndom) {
        playrandom();
        playsong();
        // $('.ani-song').style.opacity = 1;
    }
    else{
        next();
        playsong();
        // $('.ani-song').style.opacity = 1;
    }
    render();
    renderlyric()
}
// xử lí next song
function next () {
    i++;
    if(i > songlist.length){
        i = 0
    }
    loadsong(songlist[i]);
}

// tạo nút random
random.onclick = function() {
    israndom = !israndom;
    random.classList.toggle('active', israndom);
    !restar;
    // restar.classList.toggle('active', isrestar) ;
    // restar.click();
    
    
}
// xử lí khi random
function playrandom () {
    var newindex;
    do {
        newindex = Math.floor(Math.random() * songlist.length)
    }
    while (newindex === i)
    i = newindex;
    loadsong(songlist[i]);
}



// bật tắt tính năng repeat lại song
restar.onclick = function () {
    isrestar = !isrestar;
    restar.classList.toggle('active', isrestar) ;
    !random;
    
}

// khi kết thúc bài - tự động next
audio.onended = function () {
    if(isrestar){
        audio.play()
    }
    else{
        btnnext.click();
    }
}

// lấy ra phần trăm của bài hát
audio.ontimeupdate = function () {
    if(audio.duration) {
        var propressPersent = Math.floor(audio.currentTime / audio.duration * 100);
        propress.value = propressPersent
        // setTimeout(function () {
            $('.lyric').scrollBy(0, 10) = propressPersent
        // }, propressPersent)
    }
}

// khi kéo thanh tua bài hát
propress.onchange = function (e) {
    var persent = e.target.value / 100 * audio.duration;
    audio.currentTime = persent
}



//bật tắt volumn
// volumehigh.onclick = function () {
//     volumehigh.classList.add('active5');
//     volumemute.classList.remove('active5');
//     audio.volume = 1;
// }
// volumemute.onclick = function () {
//     volumehigh.classList.remove('active5');
//     volumemute.classList.add('active5');
//     audio.volume = 0;
// }


// xử 
function activesong () {
    setTimeout(function(){
        var activelisst = $('.list-song_card.active6');
        activelisst.scrollIntoView({
            behavior : "smooth",
            block : "center",
            inline : "start",
        });
    }, 300);
}

pagelistSong.onclick = function (e) {
    var songelement = e.target.closest('.list-song_card:not(.active6)');
    if(songelement || e.target.closest('.song_option')){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
}

// page new song - click
function activeNewsong () {
        setTimeout(function(){
            var activelisst = $('.page-new-card');
            activelisst.scrollIntoView({
                behavior : "smooth",
                block : "center",
                inline : "start",
            });
        }, 300);

    
}
pagesongNew.onclick = function (e) {
    var songelement = e.target.closest('.page-new-card');
    if(songelement || e.target.closest('.song_option')){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
    
}

musichomeTop.onclick = function (e) {
    var songelement = e.target.closest('.music-card');
    if(songelement || e.target.closest('.song_option')){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
    
}

musichomePopular.onclick = function (e) {
    var songelement = e.target.closest('.popular-card');
    if(songelement || e.target.closest('.song_option')){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
    
}

musichomeNew.onclick = function (e) {
    var songelement = e.target.closest('.new-song-card');
    if(songelement || e.target.closest('.song_option')){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
    
}
var countrysongCards =$('.country-song-cards');

countrysongCards.onclick = function (e) {
    var songelement = e.target.closest('.country-song-card');
    if(songelement){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
    
}

var searchSong = $('.result-songs');
searchSong.onclick = function (e) {
    var songelement = e.target.closest('.list-song_card');
    if(songelement){
        if(songelement){
            i = Number(songelement.dataset.index);//c2: khi đặt tên là data thì đã đặt theo kiểu dataset => nên dung dataset.index
            loadsong(songlist[i])
            render();
            renderlyric()
            audio.play();
            cd_thump.play();
            playsong();
        }
    }
    if(e.target.closest('.song_option')){

    }
}

// xử lý mở / tắt list bài hát
// btnlistsong.onclick = () => {
//     listsong.classList.add('active');
//     activesong();
// }
// btncloselist.onclick = () => {
//     listsong.classList.remove('active')
// }

// xử lý tắt / mở lyric
// btntop.onclick = function () {
//     // btntops.classList.toggle('active');
//     // topactive.classList.toggle('active');
//     lyrics.classList.add('active9')
// }

// btncloselyric.onclick = () => {
//     lyrics.classList.remove('active9')
// }
$('.lyric-song').onclick = function () {
    $('.laylist').style.top = 0;
}
$('.laylist-close').onclick = function () {
    $('.laylist').style.top = 100 + '%';
}
// âm thanh
function setvolume () {
    audio.volume = propressVolumne.value / 100;
    
}
propressVolumne.addEventListener('change' , setvolume)

// if(window.screen > 739 + 'px'){
//     propressVolumne.addEventListener('change' , setvolume)
// }
// function activeVolume () {
//     propressVolumne.classList.toggle('active')
// }
// iconVolume.addEventListener('click' ,activeVolume)
// thời gian song
function settimeupdate () {
    if (audio.duration) {
        var nt = audio.currentTime * (100 / audio.duration);
        propress.value = nt;
        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);

        if(curmins < 10) {curmins = "0" + curmins};
        if(cursecs < 10) {cursecs = "0" + cursecs};
        if(durmins < 10) {durmins = "0" + durmins};
        if(dursecs < 10) {dursecs = "0" + dursecs};

        timeStart.innerHTML = curmins + ":" + cursecs;
        timeEnd.innerHTML = durmins + ":" + dursecs;
    }else{
        timeStart.innerHTML = "00:00";
        timeEnd.innerHTML = "00:00";
    }


}
audio.addEventListener('timeupdate', function () {
    settimeupdate();
})
// ani scroll
var sr = ScrollReveal ({
    distance : '60px',
    duration : 2500,
    delay : 400
})

// sr.reveal('.cd');
// sr.reveal('.song_name, .volumne' ,{origin:'top'})
// sr.reveal('.stop_volumn , .moon_sun' ,{origin:'top', delay:600})
// sr.reveal('.btn_list-active, .range, #currentTime , .ani-song', {origin : 'left' , delay:600});
// sr.reveal('.btn_list-song , .control', {origin : 'right' , delay:600})









// xử li scroll top music
var topMusic = $('.top-list-music');
var topmusicPrev = $('.icon-banner_prev');
var topmusicNext = $('.icon-banner_next');
var i = 250;
topmusicNext.addEventListener('click', function () {
    handleClickBanner(1)
})

topmusicPrev.addEventListener('click', function () {
    handleClickBanner(-1)
})
function handleClickBanner (dicretion) {
    if(dicretion === 1) {
        i ++;
        topMusic.scrollLeft = i;
        i += 250;
        if(i >= 1255) return;
    }else if(dicretion === -1) {
        if(i = 0) return;
        topMusic.scrollLeft = -i;
        i -= 250;
    }
}

// xử lí scroll newsong
var listnewSong = $('.list-new-song');
var newsongPrev = $('#new-song-prev');
var newsongNext = $('#new-song-next');

newsongNext.onclick = function () {
    i++;
    listnewSong.scrollLeft = i;
    i += 200;
}
newsongPrev.onclick = function () {
    i--;
    listnewSong.scrollLeft = -400 + i;
    i -= 200;
}
// xử lí scroll page kind - singer
var kindsingerPrev = $('#kind-singer-prev');
var kindsingerNext = $('#kind-singer-next');
var listkindSinger = $('.kind-singer');

kindsingerNext.onclick = function () {
    i ++;
    listkindSinger.scrollLeft = i + 200;
    i += 200;
}
kindsingerPrev.onclick = function () {
    i --;
    listkindSinger.scrollLeft = -400 + i;
    i -= 200;
}

// xử lý click chuyển trang
var listNavi = $('.navi-item-list');
var naviItem = $$('.navi-item');
var allPage = $$('.page');
// get page
var pageHome = $('.page-home');
var pageList = $('.page-list');
var pageNew = $('.page-new');
var pageKind = $('.page-kind');


// lặp qua các thẻ navi item
naviItem.forEach(function (item) {
    item.addEventListener('click', nextPage);
    function nextPage (item) {
        $('#home').onclick= function () {
            pageHome.style.display = 'block';
            pageList.style.display = 'none';
            pageNew.style.display = 'none';
            pageKind.style.display = 'none';
            $('.kind-country').style.display = 'none';
            $('.result').style.display = 'none';
            $('#container-prev').style.color = 'rgba(74, 74, 74, 0.6)'

            // add/ remove active
            $('#home').classList.add('active');
            $('#list').classList.remove('active');
            $('#new').classList.remove('active');
            $('#kind').classList.remove('active');
        }
        $('#list').onclick = function () {
            pageHome.style.display = 'none';
            pageList.style.display = 'block';
            pageNew.style.display = 'none';
            pageKind.style.display = 'none';
            $('.kind-country').style.display = 'none';
            $('.result').style.display = 'none';
            $('#container-prev').style.color = 'rgba(74, 74, 74, 0.6)'

            // add/ remove active
            $('#home').classList.remove('active');
            $('#list').classList.add('active');
            $('#new').classList.remove('active');
            $('#kind').classList.remove('active');
        }
        $('#new').onclick = function () {
            pageHome.style.display = 'none';
            pageList.style.display = 'none';
            pageNew.style.display = 'block';
            pageKind.style.display = 'none';
            $('.kind-country').style.display = 'none';
            $('.result').style.display = 'none';
            $('#container-prev').style.color = 'rgba(74, 74, 74, 0.6)'

            // add/ remove active
            $('#home').classList.remove('active');
            $('#list').classList.remove('active');
            $('#new').classList.add('active');
            $('#kind').classList.remove('active');
        }
        $('#kind').onclick = function () {
            pageHome.style.display = 'none';
            pageList.style.display = 'none';
            pageNew.style.display = 'none';
            pageKind.style.display = 'block';
            $('.kind-country').style.display = 'none';
            $('.result').style.display = 'none';
            $('#container-prev').style.color = 'rgba(74, 74, 74, 0.6)'

            // add/ remove active
            $('#home').classList.remove('active');
            $('#list').classList.remove('active');
            $('#new').classList.remove('active');
            $('#kind').classList.add('active');
        }
        allPage.forEach(function (e) {
            // page home mặc định display = block khi vào trang web / các trang còn lại display = none
            if($('.page-home')) {
                $('.page-home').style.display = 'block'
            }else{
                e.style.display = 'none';
            }

        })
        

    }
})
// xử lý nhấn nút container prev tắt page kind country và result
$('#container-prev').onclick = function () {
    $('.kind-country').style.display = 'none';
    $('.result').style.display = 'none';
    $('#container-prev').style.color = 'rgba(74, 74, 74, 0.6)';
    pageHome.style.display = 'block'
}

var allpagePrev = $$('.page-prev');
// allpagePrev.forEach(function (e) {
//     if(e.match()) {
//         $('#container-prev').onclick = function () {
//             console.log('kkk')
//         }
//     }else if(e === $('.result')) {
//         $('#container-prev').onclick = function () {
//             console.log('hhh')
//         }
//     }
// })
    
// xử lí bật tắt theme
var iconTheme = $('#theme');
var iconcloseTheme = $('#theme-close');
var theme = $('.chu-de');

iconTheme.onclick = function () {
    theme.classList.add('active2');
}
iconcloseTheme.onclick = function () {
    theme.classList.remove('active2');
}

// xử lý thay đổi chủ đề
var btnTheme1 = $('#theme1');
var btnTheme2 = $('#theme2');
var btnTheme3 = $('#theme3');

var btnthemeDefault = $('#theme-default');

btnTheme1.onclick = function () {
    $('#body').classList.add('theme1');
    $('#body').classList.remove('theme2');
    $('#body').classList.remove('theme3');

}
btnTheme2.onclick = function () {
    $('#body').classList.remove('theme1');
    $('#body').classList.remove('theme3');
    $('#body').classList.add('theme2');
}
btnTheme3.onclick = function () {
    $('#body').classList.remove('theme1');
    $('#body').classList.remove('theme2');
    $('#body').classList.add('theme3');
}
btnthemeDefault.onclick = function () {
    $('#body').classList.remove('theme1');
    $('#body').classList.remove('theme2');
    $('#body').classList.remove('theme3');
}


// xử lý chuyển đổi page kind
var listKind = [
{
    kindid1 : 1,
    kindimg : 'image/bannervn2.jpg',
    kindheader : 'V-POP Tháng 9/2021 Có Gì Hot?',
    kindtext : 'V-Pop Tháng 9 có nhạc gì HOT? Cùng thưởng thức ngay trong Playlist này.'
},
{
    kindid2 : 2,
    kindimg : 'image/ec7f00dc529c70d629818e2029d39492.jpg',
    kindheader : 'US-UK 2021 Nghe Gì?',
    kindtext : 'Những bản Hits Âu Mỹ trong năm 2021 mà bạn không nên bỏ qua, chọn lọc bởi Zing MP3.'
},
{
    kindid3 : 3,
    kindimg : 'image/9f6fdf1b2128ca8e149f3a27ddbe6e5c.jpg',
    kindheader : 'US-UK 2021 Nghe Gì?',
    kindtext : 'Những ca khúc K-Pop `đỉnh của đỉnh` bạn đã cập nhật chưa? Cùng Zing MP3 làm điều đó ngay bây giờ.'
}
];
var listSinger = [
    {
        kindidST : 1,
        kindimg : 'image/idST.jpg',
        kindheader : 'Những Bài Hát Hay Nhất Của Sơn Tùng M-TP',
        kindtext : 'Tuyển tập những ca khúc hay nhất của Sơn Tùng M-TP'
    
    },
    {
        kindidBP : 1,
        kindimg : 'image/idBP.jpg',
        kindheader : 'Chỉ Có Thể Là BLACKPINK',
        kindtext : 'Tuyển tập những ca khúc nổi bật nhất của nhóm nhạc BLACKPINK.'
    
    },
    {
        kindidJT : 1,
        kindimg : 'image/idJT.jpg',
        kindheader : 'Chỉ Có Thể Là Justin Bieber',
        kindtext : 'Tuyển tập những ca khúc nổi bật nhất của nam ca sĩ Justin Bieber.'
    
    },
    {
        kindidBTS : 1,
        kindimg : 'image/idBTS.jpg',
        kindheader : 'Chỉ Có Thể Là BTS',
        kindtext : 'Tuyển tập những ca khúc nổi bật nhất của nhóm BTS.'
    
    },
]

var kindcountryData = $('.kind-country-data');

// Xử lí click page kind
var kindCards = $$('.page-kind-card');
var vn = $('.vietnam');
var us = $('.americal');
var korea = $('.korea')
var btnClosekindCards = $('#kind-country-music-prev');
// 


var kindinfo = $('.kind-country-info');
var kindcountryheader = $('.country-list-song-header');
var countrysongCards =$('.country-song-cards');
kindCards.forEach(function (kindCard, index) {
    kindCard.onclick = function () {
        $('.kind-country').style.display = 'block';
        pageKind.style.display = 'none';
        $('#container-prev').style.color = 'white'

        if(index === 0) {
            var htmlinfo = listKind.map(function (kind, index) {
                if(kind.kindid1) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listKind.map(function (kind, index) {
                if(kind.kindid1) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idVN) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" id="kindnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else if(index === 1) {
            var htmlinfo = listKind.map(function (kind, index) {
                if(kind.kindid2) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listKind.map(function (kind, index) {
                if(kind.kindid2) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idUS) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" isongnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else if(index === 2) {
            var htmlinfo = listKind.map(function (kind, index) {
                if(kind.kindid3) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listKind.map(function (kind, index) {
                if(kind.kindid3) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idKOREA) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" id="kindnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else if (index === 3) {
            var htmlinfo = listSinger.map(function (kind, index) {
                if(kind.kindidST) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listSinger.map(function (kind, index) {
                if(kind.kindidST) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idsontung) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" id="kindnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else if (index === 4) {
            var htmlinfo = listSinger.map(function (kind, index) {
                if(kind.kindidBP) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listSinger.map(function (kind, index) {
                if(kind.kindidBP) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idBP) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" id="kindnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else if (index === 5) {
            var htmlinfo = listSinger.map(function (kind, index) {
                if(kind.kindidJT) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listSinger.map(function (kind, index) {
                if(kind.kindidJT) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idjustin) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" id="kindnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else if (index === 6) {
            var htmlinfo = listSinger.map(function (kind, index) {
                if(kind.kindidBTS) {
                    return`
                        <img src="${kind.kindimg}" alt="">
                        <h3>${kind.kindheader}</h3>
                        <span>Update: 11/11/2021</span>
                        <span>200 người yêu thích</span>
                        <button class="btn-kind-country"><ion-icon name="play"></ion-icon>PHÁT DANH SÁCH</button>              
                    `
                }
            })
            kindinfo.innerHTML = htmlinfo.join('');
            var htmlheader = listSinger.map(function (kind, index) {
                if(kind.kindidBTS) {
                    return `
                    <h4 id="kindtext"><span>Lời tựa</span>${kind.kindtext}</h4>
                    <div class="country-list-song-header_data">
                        <span>BÀI HÁT</span>
                        <span>THỜI GIAN</span>
                    </div>
                    `
                }
            });
            kindcountryheader.innerHTML = htmlheader.join('')
            var htmlsong = songlist.map(function (song, index) {
                if(song.idsontung) {
                    return `
                    <div class="country-song-card ${index === i ? 'active6' : ''}" data-index="${index}">
                        <div class="page-new-card-data">
                            <div class="list-song-card-img">
                                <img id="imgkindsong" src="${song.songimg}" alt="">
                                <div class="list-song-card-lopphu">
                                    <ion-icon name="play-outline"></ion-icon>  
                                </div>
                            </div>                            
                            <div class="popular-song-data">
                                <span class="popular-song-name" id="kindnamesong">${song.songname}</span>
                                <span class="popular-song-outher" id="kindouthersong">${song.songouther}</span>
                            </div>
                        </div>
                        <span class="new-time">03:21</span>
                        <div class="page-new-card-option">
                            <div class="heart"><ion-icon name="heart-outline"></ion-icon></div>
                            <div class="option"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>   
                    </div>
                    `
                }
            });
            countrysongCards.innerHTML = htmlsong.join('')
        }
        else {
            return false
        }
    }
});

// btnClosekindCards.onclick = function () {
//     $('.kind-country').style.display = 'none';
// }


// xử lý tắt page result
// $('#result-prev').onclick = function () {
//     $('.result').style.display = 'none'
// }
// xử lý tìm kiếm bài hát
// 1. render ra tên bài hát
var searchInput = $('#search');
var searchlist = $(".search-box-list");
var htmlSearch = songlist.map(function (song, index) {
    return `<span class="search-list-song"><ion-icon name="search-outline"></ion-icon>${song.songname}</span>`
})
searchlist.innerHTML = htmlSearch.join('');
// xử lý click vào ô input hiện ra search history
searchInput.onkeydown = function () { 
    checkInput();
}
function checkInput () {
    if(searchInput.value === '') {
        $('.search-box').style.display = 'none';
        $('#search-close').style.display = 'none';
    }
    else if(searchInput.value != '') {
        $('#search-close').style.display = 'flex';
        $('.search-box').style.display = 'block';
    }
}
// thực hiện tắt nút close search
function removeBtnsearch () {
    $('#search-close').onclick = function () {
        $('#search-close').style.display = 'none';
        $('.search-box').style.display = 'none';
        searchInput.value = '';
    }
}
removeBtnsearch();

function suggestions () {
    var searchInput = $('#search').value.toUpperCase();
    var allNameSong = $$('.search-box-list .search-list-song');
    for (var i = 0 ; i< allNameSong.length ; i++) {
        if(allNameSong[i].innerText.toUpperCase().indexOf(searchInput) > -1) {
            allNameSong[i].style.display = 'flex'
        }
        else if (searchInput.value == '') {
            allNameSong.style.display = 'none';
        }
        else{
            allNameSong[i].style.display = 'none';
        }
    }
}


// xử lý click nút enter tìm bài hát
var allsong = $$('.list-song_card');
var searchInput = $('#search');
searchInput.addEventListener('keyup' ,(e) => {
    var searchKeyup = searchInput.value.toLowerCase().trim();
    if(e.keyCode === 13) {
        e.preventDefault();
        var btnsearch = $('#btnsearch');
        btnsearch.click();
        for (var i =0; i < allsong.length; i++) {
            if(allsong[i].classList.contains(searchKeyup)) {
                allNameSong.style.display = 'flex'
            }
        }
    }
})
btnsearch.onclick = function () {
}


// xử lý lặp các tên rồi render ra bài hát cần tìm
var allsearchSong = $$('.search-box-list .search-list-song')
allsearchSong.forEach(function (e, index) {
    e.onclick = function () {
        // nút prev hiện
        $('#container-prev').style.color = 'white'
        // ẩn các page còn lại
        if(pageHome && pageKind && pageList && pageNew && $('.kind-country')) {
            pageHome.style.display = 'none';
            pageList.style.display = 'none';
            pageNew.style.display = 'none';
            pageKind.style.display = 'none';
            $('.kind-country').style.display = 'none';
        }       
        // tự động tắt ô search history 
        setTimeout(function () {
            $('.search-box').style.display = 'none';
            $('#search-close').click();
        },300)
        // page result hiện
        $('.result').style.display = 'flex';
        // hiện tên bài sau text 'top kết quả'
        $('.result-text').textContent = `" ${e.innerText} "`;
        // render ra bài hát cần tìm
        var htmlresult = songlist.map(function (song) {
            if(e.innerText === song.songname) {
                return `
                
                <div class="list-song_card ${index === i ? 'active6' : ''}" data-index="${index}">
                    <div class="list-song-card-img">
                        <img src="${song.songimg}" alt="">
                        <div class="list-song-card-lopphu">
                            <ion-icon name="play-outline"></ion-icon>  
                        </div>
                    </div>
                    <div class="popular-song-data">
                        <span class="popular-song-name">${song.songname}</span>
                        <span class="popular-song-outher">${song.songouther}</span>
                    </div>
                </div>
                `
            }
        })
        $('.result-songs').innerHTML = htmlresult.join('')
    }
})
// xử lý click vào video
var allBannerCard = $$('.banner-card img');
var videoID = $('#video');
var bannerCard1 = $('.banner-card1');
var bannerCard2 = $('.banner-card2');
var bannerCard3 = $('.banner-card3');
// videoID.style.display = 'none';
bannerCard1.addEventListener('click', function () {
    handleClickBannerCard(1)
})
bannerCard2.addEventListener('click', function () {
    handleClickBannerCard(2)
    
})
bannerCard3.addEventListener('click', function () {
    handleClickBannerCard(3)
    
})
function handleClickBannerCard (e) {
    $('.MV').style.display = 'flex';
    // videolist.forEach(function (vd) {
        if(e === 1) {
            videoID.innerHTML = `<source  src="video/The Kid LAROI, Justin Bieber - STAY (Official Video).mp4" id="videoson" type="video/mp4">`

        }else if(e === 2) {
            videoID.innerHTML = `<source  src="video/The Kid LAROI, Justin Bieber - STAY (Official Video).mp4" id="videoson" type="video/mp4">`
        }else if(e === 3) {
            videoID.innerHTML = `<source  src="video/The Kid LAROI, Justin Bieber - STAY (Official Video).mp4" id="videoson" type="video/mp4">`
        }
    // })
    
}

$('.btn-close-MV').addEventListener('click' , function () {
    $('.MV').style.display = 'none';
    videoID.pause();    
})




// SETTING
// xử lý tắt mở setting
var settingBox = $('#setting-box');
settingBox.onclick = function () {
    $('.setting-box').classList.toggle('active')
}

// xử lý tắt mở notice
var noticeBox = $('#notice-box');
noticeBox.onclick = function () {
    $('.notice-box').classList.toggle('active')
}

// xử lý tắt mở bars setting
var barsSetting = $('.bars-setting');
barsSetting.addEventListener('click' , function () {
    $('.setting').classList.toggle('active')
})


// xử lý mở / tắt bars bottom
var btnbarsBottom = $('.btn-bottom-bars');
btnbarsBottom.addEventListener('click', function () {
    $('.bottom-bars').classList.toggle('active')
})
// btnbarsBottom.addEventListener('touchstart', function (e) {
//     console.log()
//     if (e.touches === clientY) {
//         $('.bottom-bars').classList.toggle('active')
//     }
// })



