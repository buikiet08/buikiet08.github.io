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
var moonsun = $('.moon_sun');
var moon = $('.moon');
var sun = $('.sun');
var stopweb = $('.stopweb');
var lyrics = $('.lyrics');
var lyricson = $('.lyric');
var timeStart = $('.timeStart');
var timeEnd = $('.timeEnd');
var iconVolume = $('.icon-volume');

var songlist = [
    {
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
        songimg : 'image/e23ff2faaa64eebfc57e0acde247f0db.jpg',
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
        songimg : 'image/1061332173675372452476431818456362453126714o-1593780823287457624164-crop-1593780866985947628599.jpg',
        songouther : 'Sơn Tùng MTP',
        songname : 'Có Chăc Yêu Là Đây',
        songlink : 'list_song/SƠN TÙNG M-TP - CÓ CHẮC YÊU LÀ ĐÂY - OFFICIAL MUSIC VIDEO.mp3',
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
        songimg : 'image/artworks-000606602386-58veao-t500x500.jpg',
        songouther : 'Charlie Puth',
        songname : 'Cheating on You',
        songlink : 'list_song/Charlie Puth - Cheating on You [Official Video].mp3',
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
var isstopweb = false;
var isVolume = false;
// in ra danh sách bài hát
function render () {
    var htmls = songlist.map(function (song, index) {
        return `
        <div class="first_song ${index === i ? 'active6' : ''}" data-index="${index}">
            <img src="${song.songimg}" alt="" class="song__img">
            <div class="song_name-list">
                <h4 class="namesong_list">${song.songname}</h4>
                <span class="outhersong_list">${song.songouther}</span>
            </div>
            <span class="song_option">
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </span>   
        </div>
        
        `
    }
    )
    listsongson.innerHTML = htmls.join('')
}
render();

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
        $('.ani-song').style.opacity = 0;
    }
    else{
        playsong();
        $('.ani-song').style.opacity = 1;
    }
};


// play song
function playsong () {
    play_song =true;
    audio.play();
    btnplayon.classList.add('active');
    btnplayoff.classList.remove('active');
    cd_thump.play()
}

// pause song
function pausesong () {
    play_song =false;
    audio.pause();
    btnplayon.classList.remove('active');
    btnplayoff.classList.add('active');
    cd_thump.pause()
}



// load danh sách bài hát
function loadsong (songlist) {
    namesong.textContent = songlist.songname;
    outher.textContent = songlist.songouther;
    cdthump.src = songlist.songimg;
    audio.src = songlist.songlink;
}

// điểm hiện tại
loadsong(songlist[i]);


// prev bài hát
btnprev.onclick = function () {
    if(israndom) {
        playrandom();
        playsong();
    }
    else{
        prev();
        playsong();
    }
    render();
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
    }
    else{
        next();
        playsong();
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
    // random.click();     
    // if(random.click()) {
    //     restar.click();
    // }
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
    }
}

// khi kéo thanh tua bài hát
propress.onchange = function (e) {
    var persent = e.target.value / 100 * audio.duration;
    audio.currentTime = persent
}



//bật tắt volumn
volumehigh.onclick = function () {
    volumehigh.classList.add('active5');
    volumemute.classList.remove('active5');
    audio.volume = 1;
}
volumemute.onclick = function () {
    volumehigh.classList.remove('active5');
    volumemute.classList.add('active5');
    audio.volume = 0;
}


// bật tắt chế độ sáng / tối
moon.onclick = function () {
    moon.classList.add('active4');
    sun.classList.remove('active4');
    body.classList.add('active7');
    content.classList.add('active8');
}
sun.onclick = function () {
    sun.classList.add('active4');
    moon.classList.remove('active4');
    body.classList.remove('active7');
    content.classList.remove('active8');
}
// xử 
function activesong () {
    setTimeout(function(){
        var activelisst = $('.first_song.active6');
        activelisst.scrollIntoView({
            behavior : "smooth",
            block : "center",
            inline : "start",
        });
    }, 300);
}

listsongson.onclick = function (e) {
    var songelement = e.target.closest('.first_song:not(.active6)');
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
// 
// stopweb.onclick = function () {
//     isstopweb = !isstopweb;
//     stopweb.classList.toggle('active3', isstopweb);
//     if(!isstopweb){
//         audio.play();
//     }
//     else{
//         audio.pause();
//     }
// }

// xử lý mở / tắt list bài hát
btnlistsong.onclick = () => {
    listsong.classList.add('active');
    activesong();
}
btncloselist.onclick = () => {
    listsong.classList.remove('active')
}

// xử lý tắt / mở lyric
btntop.onclick = function () {
    // btntops.classList.toggle('active');
    // topactive.classList.toggle('active');
    lyrics.classList.add('active9')
}

btncloselyric.onclick = () => {
    lyrics.classList.remove('active9')
}
// âm thanh
function setvolume () {
    audio.volume = propressVolumne.value / 100;
    
}
if(window.screen > 739 + 'px'){
    propressVolumne.addEventListener('change' , setvolume)
}
function activeVolume () {
    propressVolumne.classList.toggle('active')
}
iconVolume.addEventListener('click' ,activeVolume)
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

sr.reveal('.cd');
sr.reveal('.song_name, .volumne' ,{origin:'top'})
sr.reveal('.stop_volumn , .moon_sun' ,{origin:'top', delay:600})
sr.reveal('.btn_list-active, .range, #currentTime , .ani-song', {origin : 'left' , delay:600});
sr.reveal('.btn_list-song , .control', {origin : 'right' , delay:600})