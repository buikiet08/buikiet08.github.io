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
        nhìn lên trần nhà rồi quay ra lại quay vào
        Nằm trằn trọc vậy đến sáng mai
        Ôm tương tư, nụ cười của ai đó
        Làm con tim ngô nghê như muốn khóc òa
        Vắt tay lên trên trán mơ mộng
        Được đứng bên em trong nắng xuân hồng
        1 giờ sáng trôi qua trôi nhanh kéo theo ưu phiền miên man
        Âm thầm gieo tên em vẽ lên hi vọng
        Đúng là yêu thật rồi 
        còn không thì hơi phí này 
        cứ thế loanh quanh loanh
        Quanh loanh quanh lật qua lật lại (2 giờ)
        Những ngôi sao trên cao 
        là người bạn tâm giao
        Lắng nghe anh luyên thuyên 
        về một tình đầu đẹp tựa chiêm bao
        Có nghe thôi đã thấy ngọt ngào
        Đủ biết anh si mê em nhường nào
        Ít khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào
        Nắm đôi tay kiêu sa được một lần không ta
        Nghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà
        Hóa ra yêu đơn phương một người
        Hóa ra khi tơ vương một người 3 giờ đêm vẫn ngồi cười
        
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi
        Ôm trong cơn mơ trong cơn mơ trong cơn mơ trong cơn mơ
        Có thế cũng khiến anh vui điên lên ngỡ như em đang bên
        Chắp bút đôi ba câu thơ ngọt ngào muốn em đặt tên
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi
        Ôm trong giấc mơ trong cơn mơ trong cơn mơ trong cơn mơ
        Yêu đến vậy thôi phát điên rồi làm sao giờ
        
        [Rap:]
        Chịu!
        Đêm nay không ngủ
        Tay kê lên tủ
        Miên man anh tranh thủ chơi với suy tư bao nhiêu cho đủ
        Yêu em ngu ngơ mình tôi
        Yêu không quan tâm ngày trôi
        Yêu ánh mắt bờ môi
        Yêu đơn phương vậy thôi
        Lại còn chối
        Con tim thẹn thùng đập lạc lối liên hồi
        Đừng chày cối
        Miệng cười cả ngày vậy là chết toi rồi
        Ngày càng nhiều thêm
        Tình yêu cho em ngày càng nhiều thêm
        Muốn nắm đôi bàn tay đó một lần
        Du dương chìm sâu trong từng câu ca dịu êm
        
        [Ver 2:]
        Những ngôi sao trên cao
        Là người bạn tâm giao
        Lắng nghe anh luyên thuyên về một tình đầu đẹp tựa chiêm bao
        Có nghe thôi đã thấy ngọt ngào
        Đủ biết anh si mê em nhường nào
        Ít khi văn thơ anh dạt dào bụng đói nhưng vui quên luôn cồn cào
        Nắm đôi tay kiêu sa được một lần không ta
        Nghĩ qua thôi con tim trong anh đập tung lên rung nóc rung nhà
        Hóa ra yêu đơn phương một người
        Hóa ra khi tơ vương một người 3 giờ đêm vẫn ngồi cười
        
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi
        Ôm trong cơn mơ trong cơn mơ trong cơn mơ trong cơn mơ
        Có thế cũng khiến anh vui điên lên ngỡ như em đang bên
        Chắp bút đôi ba câu thơ ngọt ngào muốn em đặt tên
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi
        Ôm trong giấc mơ trong cơn mơ trong cơn mơ trong cơn mơ
        Yêu đến vậy thôi phát điên rồi làm sao giờ
        
        Em xinh như một thiên thần
        Như một thiên thần
        Như một thiên thần
        Ngỡ như em là thiên thần
        Em xinh như một thiên thần
        Như một thiên thần
        
        Em xinh như một thiên thần
        Như một thiên thần
        Như một thiên thần
        Ngỡ như em là thiên thần
        Ngỡ như ngỡ như ngỡ như ngỡ như ngỡ như
        
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi
        Ôm trong cơn mơ trong cơn mơ trong cơn mơ trong cơn mơ
        Có thế cũng khiến anh vui điên lên ngỡ như em đang bên
        Chắp bút đôi ba câu thơ ngọt ngào muốn em đặt tên
        Cứ ôm anh đi ôm anh đi ôm anh đi ôm anh đi
        Ôm trong giấc mơ trong cơn mơ trong cơn mơ trong cơn mơ
        Yêu đến vậy thôi phát điên rồi làm sao giờ`
    },
    {
        songimg : 'image/3107-la-gi-3.jpg',
        songouther : 'Duongg - Nau - titie',
        songname : '3107 - 3',
        songlink : 'list_song/31073-WNDuonggNautitie-7059323.mp3',
        lyric : `Xin lỗi em về những chuyện mà ta đã nghĩ
        Xin lỗi em về những gì mà ta đã nói
        Vì bao câu chuyện mình lúc xưa
        Giờ đây chẳng thể viết tiếp được
        
        Chỉ là xa thôi mà, chẳng khi nào ta ngừng nghĩ đến nhau.
        Bao tháng năm vô tư hồn nhiên biết mấy
        Những chuyến xe ta đi cùng năm tháng ấy
        Giờ đây chỉ là những thước phim
        
        Phai mờ sâu vào những kỉ niệm
        Điều duy nhất bây giờ, còn nhớ chỉ là vài câu
        Xin lỗi vì những lời hứa, xin lỗi chẳng yêu được nữa
        Xin lỗi vì em chẳng thể đến bên cạnh anh mỗi khi trời đổ mưa
        
        Xin lỗi vì em đã đúng, xin lỗi vì anh đã sai
        Xin lỗi vì ta chẳng thể đi cùng nhau để bây giờ cách xa
        Vòng xe thứ nhất là đón đưa em qua từng điểm hẹn ngày đầu tiên
        Góc phố đèn mờ có ngọn đèn cũ thổi hồn nỗi buồn này vào tim
        
        Vòng xe thứ hai là cùng với em đón nắng ngày xuân vào chiều tà
        Là thèm được nhớ nhưng rồi phải buông với họ gọi đó là yêu xa
        Em đâu hay biết, vẫn có người đứng chờ đợi em tới giữa khuya
        Chỉ để quan tâm em dẫu biết rằng em đang bận lòng với nửa kia
        
        Cùng một góc nhìn nhưng cảm xúc bây giờ dần trở nên vô vị
        Đứng trên dốc tình chỉ là mỗi góc nhìn để thấy được em và đô thị
        Ở trong thành phố, lòng đành cố gào thét khiến cổ họng khát khô
        Bây giờ là một giờ sáng, cafe đậm hòa cùng gói Bastos
        
        Anh từng sống trong tim em, quá thời hạn nhưng rồi phải ra đi
        Thành phố hồi đó có trời gió và em còn hơn cả Paris
        “Anh cũng chỉ nghĩ về những thứ mơ mộng thôi
        
        Dẫu biết thực tế khác xa vời vợi rồi
        Cũng chả rõ mình đã nhớ em về bao nhiêu đêm
        Nhưng mà ít nhiều gì thì anh cũng đã từng là một người rất yêu em”`
    },
    {
        songimg : 'image/ab67616d0000b273584941358113e20c6fce2175.jpg',
        songouther : 'Dalab',
        songname : 'Thức Giấc',
        songlink : 'list_song/ThucGiac-DaLAB-7048212.mp3',
        lyric : `Sau những con đường ***
        Ta đã vô tình đến
        Là nụ cười em quẩn quanh với giấc mơ
        Nơi những ánh đèn sáng
        Ta với khung hình khác
        Là bình yên cất giấu trước cuộc đời
        
        Nhìn xem lần sau cuối, là bao điều tiếc nuối
        Tình yêu là thứ khiến em quên đi vài lần yếu đuối
        Lặng nhìn giọt sương rơi...lạc trong màu u tối
        Là khi tình yêu ấy đã khiến em thôi những mộng mơ
        
        Anh vẫn thức giấc trên giường
        Với giấc mơ vừa tàn
        Bản nhạc vụt tắt
        Bộ phim kia dừng lại
        Nghe tiếng mưa rơi bên thềm
        Anh ngước mắt lặng nhìn Rồi chờ đợi mãi...Vẫn không quay lại
        
        No no no .... baby let me know
        no no no .... baby let me know
        
        Điều gì xảy ra khi chia đôi cơn mơ
        Một thực tại kia không có em đợi chờ
        Nhìn từng hạt mưa rơi bên hiên vỡ tan
        Từng ký ức lỡ mang, sao nỡ quên vội vàng
        
        Ở bên anh thêm một đêm thôi một đêm thôi
        Anh đã từng định nói nhưng rồi lại lặng im thôi lặng im thôi
        Vì anh biết không thể trói buộc
        Phía trước là bầu trời cao sâu
        Sống với những mơ ước thì chẳng được bao lâu
        Và tất cả đã hết sẽ chẳng có hồi kết
        Không có câu tạm biệt nhưng cũng chẳng sao đâu
        
        Anh vẫn thức giấc trên giường
        Với giấc mơ vừa tàn
        Bản nhạc vụt tắt
        Bộ phim kia dừng lại
        Nghe tiếng mưa rơi bên thềm
        Anh ngước mắt lặng nhìn
        Rồi chờ đợi mãi...Vẫn không quay lại
        
        No no no .... baby let me know
        No no no .... baby let me know
        
        Lênh đênh trên ranh giới giữa thực tại
        Giật mình tỉnh giấc trống không cô đơn
        Hay mơ tiếp những giấc mơ chẳng thành
        Nhặt nhạnh từng chút hơi ấm em còn đâu đây
        
        Lại là một ngày mới anh thức giấc với thở dài
        Lại là một ngày mới đánh thức anh bằng nỗi đau
        Dù biết không có phép màu nào níu em quay trở lại
        Chỉ một lần sau cuối cho anh được thấy hình bóng em
        
        yeah yeah ah
        Làm sao anh biết mình đang mơ hay thực tại ah
        It feels so real
        Anh quay con quay mong con quay không dừng lại ah
        Nếu em hiện ra, liệu anh có ngần ngại,
        Thả mình, để anh ngã, chìm đắm trên đôi vai
        Hay là vùng dậy để tỉnh giấc không bên ai, nghe nỗi đau thêm dài ah
        Càng muốn quên, càng nhớ kỹ ghi lâu
        Trong giấc mơ, liệu ta có bên nhau?
        Khi anh thấy ở trong vòng tay
        Anh chẳng hề có em, anh có nên nhắm mắt lại rồi lại đi xuống thêm sâu
        Ah một mai thức giấc
        Hay sẽ mãi mơ ah
        Đoạn phim lặp đi lặp lại trong đầu.
        Anh không biết làm sao để mà anh thoát ra mau
        
        Anh vẫn thức giấc trên giường
        Với giấc mơ vừa tàn
        Bản nhạc vụt tắt
        Bộ phim kia dừng lại
        Nghe tiếng mưa rơi bên thềm
        Anh ngước mắt lặng nhìn
        Rồi chờ đợi mãi...Vẫn không quay lại
        
        Anh vẫn thức giấc trên giường
        Với giấc mơ vừa tàn
        Bản nhạc vụt tắt
        Bộ phim kia dừng lại
        Nghe tiếng mưa rơi bên thềm
        Anh ngước mắt lặng nhìn
        Rồi chờ đợi mãi...Vẫn không quay lại
        
        No no no .... baby let me know
        No no no .... baby let me know
        
        Nhìn xem lần sau cuối, là bao điều tiếc nuối
        Tình yêu là thứ khiến em quên đi vài lần yếu đuối
        Lặng nhìn giọt sương rơi...lạc trong màu u tối
        Là khi tình yêu ấy đã khiến em thôi những mộng mơ.`
    },
    {
        songimg : 'image/ab67616d0000b27341e31d6ea1d493dd77933ee5.jpg',
        songouther : 'TheKidLAROI - JustinBieber',
        songname : 'Stay',
        songlink : 'list_song/Stay-TheKidLAROIJustinBieber-7045258.mp3',
        lyric : `[Chorus: The Kid LAROI]
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can’t find nobody else as good as you
        I need you to stay, need you to stay, hey (Oh)
        
        [Verse 1: The Kid LAROI]
        I get drunk, wake up, I'm wasted still
        I realize the time that I wasted here
        I feel like you can't feel the way I feel
        Oh, I’ll be fucked up if you can't be right here
        
        [Pre-Chorus: The Kid LAROI]
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, I'll be fucked up if you can't be right here
        
        [Chorus: The Kid LAROI]
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey
        
        [Verse 2: Justin Bieber]
        When I’m away from you, I miss your touch (Ooh)
        You’re the reason I believe in love
        It's been difficult for me to trust (Ooh)
        And I’m afraid that I'ma fuck it up
        Ain't no way that I can leave you stranded
        'Cause you ain’t ever left me empty-handed
        And you know that I know that I can't live without you
        So, baby, stay
        
        [Pre-Chorus: Justin Bieber, The Kid LAROI & Both]
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        I'll be fucked up if you can't be right here
        
        [Chorus: The Kid LAROI with Justin Bieber]
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey
        
        [Outro: The Kid LAROI & Justin Bieber]
        Woah-oh
        I need you to stay, need you to stay, hey`
    },
    {
        songimg : 'image/E3QFqZUXEAIr96D.jpg',
        songouther : 'Justin Bieber - Daniel Caesar - Giveon',
        songname : 'Peaches',
        songlink : 'list_song/Peaches-JustinBieberDanielCaesarGiveon-6997601.mp3',
        lyric : `[Chorus: Justin Bieber]
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That's that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that’s it)
        
        [Verse 1: Justin Bieber]
        And I see you (Oh), the way I breathe you in (In)
        It's the texture of your skin
        I wanna wrap my arms around you, baby
        Never let you go, oh
        And I say, oh, there's nothing like your touch
        It’s the way you lift me up, yeah
        And I'll be right here with you 'til the end
        
        [Chorus: Justin Bieber]
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That's that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that's it)
        
        [Verse 2: Daniel Caesar]
        You ain't sure yet, but I'm for ya'
        All I could want, all I can wish for
        Nights alone that we miss more
        And days we save as souvenirs
        There’s no time, I wanna make more time
        And give you my whole life
        I left my girl, I’m in my Yorker
        Hate to leave her, call it torture
        Remember when I couldn't hold her
        Left the baggage for a mover
        
        [Chorus: Justin Bieber]
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That’s that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that's it)
        
        [Verse 3: GIVEON]
        I get the feeling, so I'm sure (Sure)
        Hand in my hand because I'm yours
        I can’t, I can't pretend, I can't ignore you're right for me
        Don't think you wanna know just where I've been, oh
        Don't be distracted
        The one I need is right in my arms (Oh)
        Your kisses taste the sweetest with mine
        And I'll be right here with you 'til end of time
        
        [Chorus: Justin Bieber]
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That's that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that's it)
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That's that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that's it)
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That's that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that's it)
        I got my peaches out in Georgia (Oh, yeah, shit)
        I get my weed from California (That's that shit)
        I took my chick up to the North, yeah (Badass bitch)
        I get my light right from the source, yeah (Yeah, that's it)`
    },
    {
        songimg : 'image/1622427158959_640.jpg',
        songouther : 'Dhruv',
        songname : 'DoubleTake',
        songlink : 'list_song/DoubleTake-Dhruv-7016375.mp3',
        lyric : `I could say I never dare
        To think about you in that way, but
        I would be lying
        And I pretend I'm happy for you
        When you find some dude to take home
        But I won't deny that
        
        In the midst of the crowds
        In the shapes in the clouds
        I don't see nobody but you
        In my rose-tinted dreams
        Wrinkled silk on my sheets
        I don't see nobody but you
        
        Boy, you got me hooked onto something
        Who could say that they saw us coming?
        Tell me, do you feel the love?
        Spend the summer of a lifetime with me
        Let me take you to the place of your dreams
        Tell me, do you feel the love?
        
        And I could say I never answered
        Those believers inside my head
        But that's far from the truth
        Don't know what's come over me
        It seems like yesterday when I said
        We'll be friends forever
        
        Constellations of stars
        Murals on city walls
        I don't see nobody but you
        You're my vice, you're my muse
        You're a nineteenth-floor view
        I don't see nobody but you
        
        Boy, you got me hooked onto something
        Who could say that they saw us coming?
        Tell me, do you feel the love?
        Spend the summer of a lifetime with me
        Let me take you to the place of your dreams
        Tell me, do you feel the love?
        
        Boy, you got me hooked onto something
        Who could say that they saw us coming?
        Tell me, do you feel the love?
        Spend the summer of a lifetime with me
        Let me take you to the place of your dreams
        Tell me, do you feel the love?
        
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Do you feel the love?
        Feel the love
        Do you feel the love?`
    },
    {
        songimg : 'image/loi-bai-hat-mp3-va-hop-am-unstoppable-cua-ca-si-troyboi-0.png',
        songouther : 'Sia',
        songname : 'Unstoppable',
        songlink : 'list_song/Unstoppable-Sia-4312901.mp3',
        lyric : `[Verse 1:]
        All smiles, I know what it takes to fool this town
        I'll do it 'til the sun goes down and all through the night time
        Oh yeah, oh yeah, I'll tell you what you wanna hear
        Leave my sunglasses on while I shed a tear
        It's never the right time, yeah, yeah.
        
        [Pre-Chorus:]
        I put my armor on, show you how strong how I am
        I put my armor on, I'll show you that I am.
        
        [Chorus:]
        I'm unstoppable
        I'm a Porsche with no brakes
        I'm invincible
        Yeah, I win every single game
        I'm so powerful
        I don't need batteries to play
        I'm so confident, yeah, I'm unstoppable today
        Unstoppable today, unstoppable today
        Unstoppable today, I'm unstoppable today.
        
        [Verse 2:]
        Break down, only alone I will cry out now
        You'll never see what's hiding out
        Hiding out deep down, yeah, yeah
        I know, I've heard that to let your feelings show
        Is the only way to make friendships grow
        But I'm too afraid now, yeah, yeah.
        
        [Pre-Chorus:]
        I put my armor on, show you how strong how I am
        I put my armor on, I'll show you that I am.
        
        [Chorus:]
        I'm unstoppable
        I'm a Porsche with no brakes
        I'm invincible
        Yeah, I win every single game
        I'm so powerful
        I don't need batteries to play
        I'm so confident, yeah, I'm unstoppable today
        Unstoppable today, unstoppable today
        Unstoppable today, I'm unstoppable today
        Unstoppable today, unstoppable today
        Unstoppable today, I'm unstoppable today.
        
        [Pre-Chorus:]
        I put my armor on, show you how strong how I am
        I put my armor on, I'll show you that I am.
        
        [Chorus:]
        I'm unstoppable
        I'm a Porsche with no brakes
        I'm invincible
        Yeah, I win every single game
        I'm so powerful
        I don't need batteries to play
        I'm so confident, yeah, I'm unstoppable today
        Unstoppable today, unstoppable today
        Unstoppable today, I'm unstoppable today
        Unstoppable today, unstoppable today
        Unstoppable today, I'm unstoppable today.`
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
    propressVolumne.value = 0 ;
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
    volumehigh.classList.add('active5');
    volumemute.classList.remove('active5');
}
propressVolumne.addEventListener('mousemove' , setvolume)
function activeVolume () {
    propressVolumne.classList.toggle('active')
}
iconVolume.addEventListener('mousedown' ,activeVolume)
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