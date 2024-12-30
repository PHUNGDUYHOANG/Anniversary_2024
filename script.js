const albums = {
    'Tháng 1': ['January/100yead.jpg',
         'January/3 tháng.jpg',
          'January/ô.jpg',
           'January/compa.jpg',
            'January/IMG_0694.jpg',
             'January/IMG_0576.jpg',
              'January/meo.jpg',
               'January/daybuoctoc.jpg',
                'January/deodaybuoctoc.jpg',
                 'January/sấy tóc.jpg',
                  'January/deokinh.jpg',
                   'January/trabidao.jpg'],
    'Tháng 2': ['February/hai1.jpg',
         'February/hai2.jpg',
          'February/hai3.jpg',
           'February/leader22.jpg',
            'February/hai5.jpg',
             'February/hai6.jpg',
              'February/hai7.jpg',
               'February/hai81.jpg',
                'February/hai9.jpg',
                 'February/hai10.jpg',
                  'February/hai11.jpg',
                   'February/hai12.jpg'],
    'Tháng 3': ['March/ba1.jpg',
         'March/ba2.jpg',
          'March/ba3.jpg',
           'March/ba4.jpg',
            'March/ba5.jpg',
             'March/ba 4.jpg',
              'March/ba8.png',
               'March/ba10.jpg',
                'March/ba6.jpg',
                 'March/ba7.jpg',
                  'March/ba12.jpg',
                   'March/ba11.jpg'],
    'Tháng 4': ['May/bon1.jpg',
         'May/bon2.jpg',
          'May/bon3.jpg',
           'May/bon4.jpg',
            'May/bon5.jpg',
             'May/bon6.jpg',
              'May/bon7.png',
               'May/bon8.jpg',
                'May/bon9.jpg',
                 'May/bon10.jpg',
                  'May/bon11.jpg',
                   'May/bon12.jpg'],
    'Tháng 5': [
         'April/nam1.jpg',
         'April/nam2.jpg',
         'April/nam3.jpeg',
         'April/nam4.jpg',
         'April/nam5.jpg',
         'April/nam6.jpg',
         'April/nam7.jpg',
         'April/nam8.jpg',
         'April/nam9.jpg',
         'April/nam10.jpg',
         'April/nam11.jpg',
         'April/nam12.jpg'],
    
    'Tháng 6': [
        'June/sau1.jpg', 
        'June/sau2.jpg', 
        'June/sau3.png', 
        'June/sau4.jpg',
        'June/sau5.jpg', 
        'June/sau6.jpg', 
        'June/sau7.jpg', 
        'June/sau8.jpg',
        'June/sau9.png', 
        'June/sau10.jpg', 
        'June/sau11.jpg', 
        'June/sau12.jpg'
    ],

    'Tháng 7': [
        'July/bay1.png', 
        'July/bay2.jpg', 
        'July/bay3.jpg', 
        'July/bay4.jpg',
        'July/bay5.jpg', 
        'July/bay6.jpg', 
        'July/bay7.jpg', 
        'July/bay8.jpg',
        'July/bay9.jpg', 
    ],
    'Tháng 8': [
          'August/tam1.jpg', 
          'August/tam2.jpg', 
          'August/tam3.jpg', 
          'August/tam4.jpg',
          'August/tam5.jpg', 
          'August/tam6.jpg', 
          'August/tam7.jpg', 
          'August/tam8.jpg',
          'August/tam9.jpg', 
          'August/tam10.jpg', 
          'August/tam11.jpg', 
          'August/tam12.jpg', 
          'August/tam13.jpg', 
          'August/tam14.jpg'
      ],
    'Tháng 9': [
          'September/chin1.jpg', 
          'September/chin2.jpg', 
          'September/chin3.jpg', 
          'September/chin4.jpg',
          'September/chin5.jpg', 
          'September/chin6.jpg', 
          'September/chin7.jpg', 
          'September/chin8.jpg',
          'September/chin9.jpg' 
     ],
    'Tháng 10': [
          'October/muoi1.jpg', 
          'October/muoi2.jpg', 
          'October/muoi3.jpg', 
          'October/muoi4.jpg',
          'October/muoi5.jpg', 
          'October/muoi6.jpg', 
          'October/muoi7.jpg', 
          'October/muoi8.jpg',
          'October/muoi9.jpg'
     ],
    'Tháng 11': [
          'November/mm1.jpg',
          'November/mm2.jpg', 
          'November/mm3.jpg', 
          'November/mm4.jpg',
          'November/mm6.jpg', 
          'November/mm7.jpg', 
          'November/mm8.jpg'
        ],
    'Tháng 12': [
          'December/m21.jpg', 
          'December/m22.jpg', 
          'December/m23.jpg', 
          'December/m24.jpg'
     ]
};

const titles = {
    'Tháng 1': ['tròn 100 ngày bên nhau 🎉, 100 ngày này chả bao giờ quên 🤣 yêu nhau mà ngại chạm mặt nhau, nắm tay còn run hớt người.', '100 days cũng là tròn 3 tháng này🎉🎉🫶🫶',
      'Tháng 1 tháng của nhưng cơn mưa, mưa mà bé ta suốt ngày dầm mưa đi học, tặng bé mà hông biếc bây giờ bé còn giữ hông ha', 'lớp 12, gần 18 tuổi rồi nàng ta không biết dùng compa🤫',
      'Nàng ta không bao giờ biết được tôi xem đi xem lại ảnh này bao nhiêu làn đâu.',
      'Lúc đấy đi đâu mắt cũng hiện cái ảnh này lên này, đúng fan cứng nàng ta luôn, quá xinhhh', 
      'Tiểu tam đòi vào phòng câu dẫn người yêu nàng taaa', 
      'Ảnh này không biết buồn gì nhưng là nhớ cô ta, 2h đêm anh còn chưa ngủ, biết bao tương tư là cho đủ🎶🎵🎶🎶', 
      'Mới được tặng, quá thích nên đeo, luôn mang theo bên mình, nhưng lúc nàng ta cần thì lại không mang theo🤦‍♂️', 
      'Lần đầu được nàng ta cho xem sấy tóc🤣🎉', 
      'Lúc đấy hông nhận ra đây là em bé của mình thật, hông dám nói🌚', 
      'Đã biết cùng nhau uống trà bí đaoo'
    ],
    'Tháng 2': ['Lần đầu được nàng ta gọi husbanddddd🎉',
         'Kỷ nghỉ tết năm đó, cũng là lần đầu tiên xa nhau lâu nhất từ khi mới iuu',
          'Nghỉ tết quá nhớ ngiu, đi đou cũng đeoooo',
           'Lần đầu tiên được nàng ta nhớ🎉🎉🎉',
            'Khoe bánh trưng anh bé gói',
             'Mùng 2 đi chơi thếu nàng ta, mong seo năm nay đi chơi có nàng ta đi cùng😊',
              'Mùng 4 tết quá nhớ nàng ta nên phải xuống gặp gấppp',
               'Yêu nàng ta được 3 tháng 3 tuần 3 ngày rùi❤️',
                'Rùi mùng năm đi uống rượu bị ngã🤦‍♂️',
                 'Cô Thúy mừng tuổi nàng ta 5 nghìn anh ta 10 nghìn 🤣',
                  'Bức ảnh điệu nhất trong lòng tôi',
                   'Cuối tháng 2 đạt KPI do cô ta đưa ra 50kg🎉🎉🎉'
            ],
    'Tháng 3': ['Tự làm tặng cô ta, làm 3 bông mà bông này ổn nhất, nhưng lúc đấy tự thấy mình làm đẹp🤣',
         'Theo anh đi chốn em ơiii🎶 mọi kế hoạch được bắt nguồn từ chiếc sờ to ry nàyyy',
          'Cô ta gọi nó là tiểu tam🤣',
           'Dỗi mãi, nói mãi nàng ta mới chịu cho xem nàng ta như này, không bao giờ quyên được khoảng khắc nàyy',
            'Lời chúc chả bao giờ quyênnn🫶',
             'Quà sinh nhật nàng ta tặng anh bé, có cả áo đôi luoonnn, đến thời điểm bây giờ áo nàng ta tặng chắc là chiếc áo anh mặc nhiều nhất trong tất cả các áo đó ạ❤️❤️❤️',
              'Đi về nhà hay đi đâu xa đều mặc áo bé ta tặng',
               'Nhìn nhau qua cửa kính, sang năm là không phải nhìn nhau qua cửa kính nữa rồi, lúc còn đi học cứ mỗi lần đi qua là nhìn vào trong xem thấy nàng không!',
                'Thật may mắn cho nàng ta khi có được toiiii🤣',
                 'Phú bà Ngọc Híu nuôi ngiuuu',
                  'Lòng đau nhói mỗi khi ta học, nhìn nàng ta đi về, lúc đấy còn khá ngại chạm mặt thì phải🤣🤣',
                   'Vấn đề lớn nhất của tháng này là nàng ta gọi không bật cam với không cho xem mặt🤣 dỗi quá trời mà nàng ta đâu biết😂'
            ],
    'Tháng 4': ['Mê luôn cơ mà😒',
         'Không biết nàng ta có dùng không 😂',
          'Quá thích với 2 món quà nàyyyy',
           'Em bé tay bé🤣',
            'Đấu tranh mãi sáng tháng này cô ta mới cho mình xem cô ta nhiều',
             'Shiper giao trà sữa cho nàng ta',
              'Sinh nhật người nhỏ tuổi hơn mình, em bé mèo lông đỏ🎉🎉',
               'Niềm đau không bao giờ quyên😌',
                'Bắt đầu đi ôn, cùng nàng ta chốn đi ôn để đi mua nước, mua nước là phụ còn hun hít là chính 🤣',
                 'Đi ôn không bao giờ để tay yên🤣',
                  'Muốn đi ôn tiếp quáa',
                   'Lại nhìn nhau, yêu thương nhau qua của kính '],
    'Tháng 5': ['Tháng 5 chúng con yêu nhau được 200 ngày rùi nè mẹ vợ oiii🤣',
         'Hai đứa kia!!!!! ra chỗ khác chụp😂🤣',
          'Đi ôn🌚',
           'Nàng ta muốn bóp chết chồng!!',
            'quá mê con người này, +1 tỷ điểm cho nàng ta khi đã cho xem mặt khi gọi',
             'Ngày xa nhau ngày càng gần, bức anh Mẹ Thúy chụp đóa',
              'Nàng ta đi với người yêu nhưng tâm chí đặt trong điện thoại',
               'Liệu cô ta có nhớ vị bánh của mẹ Lái làm 🤣',
                'Ánh mắt của kẻ sy tình😊',
                 'Tôi thấy có nhiều tướng phu thê trong này🤣',
                  'đẹpppppppppppp',
                   'Yêu em thế không biết!!!!'],
    'Tháng 6': ['Ngày bố đón Cá híu về',
         'Cá híu',
          'Được nàng ta đeo cho để đi về nhà, vừa về vừa nhớ nàng ta',
           'Lúc xuống lại nhìn nhau qua cửa kính ',
            'Là một người đàn ông đích thực tôi không thể đứng nhìn người yêu mình trả tiền, vì thế!! tôi quay đi chỗ khác🌚',
             'Đi chơi kiểu không có thời gian mà khi cưa nhau 2 đứa nói đã thành hiện thực!!!',
              'Hun cái thui mà đẩyy😒',
               'Khuôn mặt khi vừa được người yêu dẫn đi chơi🤣',
                'Mỗi sáng tại cổng trường vào lúc 6h50 của 2 đứa chúng tôii',
                 'Đi ôn mệt quá nằm thía đó',
                  'Thi tốt nghiệp ông trời cũng không nợ chia cắt khác phòng thiii🤣😂',
                   'Thi xong ngồi ôm ấp nhau giữa ban ngày ban mặt'],
    'Tháng 7': [
          'Bắt đầu cho mẹ Híu chăm cá híu',
          'Rồi cũng đến ngày anh dọn hết đồ của mình ra khỏi thành phố này, rời khỏi nơi có emm🙁',
          'Anh bắt đầu với cuộc sống sau khi tốt nghiệp, chạy tour vi vu khắp Hà Giang',
          'Thức dậy ở một nơi xa mà không ở cùng thành phố với emm',
          'Đi làm buồn ngủ được emngiu tặng cốc Cafe ❤️',
          'Đi làm nhìn khách ôm ấp nhau mà nhớ em muốn phát khóc',
          'Rồi lại phi xuống Hà Giang để gặp người tình bé nhỏ của mìnhhhh🫶🫶',
          'Đưa người tình đi thử vòng số 8',
          'Rồi lại quay về những ngày vivu khắp Hà Giang',
          ],
    'Tháng 8': [
          'Về mau mau sắp được gặp em ta ',
          'Cô ơi nay cháu dẫn Hiếu đi uống nước tí chau đưa Hiếu về ạ, đến nơi gọi cô nhé🤣',
          'Đưa em ta đi thi bằng lái',
          'Được mẹ nàng ta khen đẹp đôi',
          'Rồi anh ngiu của nàng ta lại lao đầu vào làm việc',
          'Sau này nên nuôi một rổ cún',
          'Hơn trục bước thôi nhưng áp lực hơn thi tốt nghiệp',
          '"nay có thằng nèo đến nhà mình, hình như Dì mình sắp bị bắt đi rồi"',
          'Nàng ta vẫn thản nhiên, tôi thì tim đập chân run',
          'Về nhà thuiiiiii',
          'Rồi ngày này cũng đến sắp phải xa em bé rùii',
          'con người đẹp nhất thế giớiiiii',
          'Khó quyênnnn🤣',
          'Bai baii em và Hà Giang🙁'
     ],
    'Tháng 9': [
          'Mỗi khi mệt nhìn được sự đáng yêu của nàng ta lại có động lực thêm bao nhiêu',
          '2 người đó đang chêu tôi không được đi chơi với người iu',
          'Bám nhau được 333 ngày🎉',
          'Mỗi sáng chả được em ta gọi đi học, chả được học cùng nàng ta nữa',
          'Mỗi khi mệt lại được nàng ta tiếp động lực',
          'Thành phố này chả xinh đẹp, chả đáng yêu',
          'Nhìn mà muốn cắn',
          '❤️',
          'Dình mò giật phiếu bé ngoan về cho vợ🤣'
          ],
    'Tháng 10':[
          'Sáng đi học nhớ emm',
          'Đang trong giờ học nhớ iem',
          'Nghỉ học nhớ iemmm',
          '2H đêm về Hà Giang kỉ niệm 1 năm yêu nhau thôiii',
          'Sau 1 thời gian khá dài xa em và Hà Giang giờ đã về rùi đây',
          'Ngồi đợi nàng ta đếnn, quá nhớ rồi',
          'Đến không thèm ôm, nàng ta chả nhớ tôi',
          'Xa nhau 2 tháng thôi ngồi sau xe nàng ta sứng tơ cậu luôn mà ',
          'Tròn 1 year bên nhauu, 365 ngày bám'
          ],
    'Tháng 11':[
        'View qué đẹp từ trước đến giờ với quà sinh nhật của bé',
        'Sau 1 năm bám nhau thì bé ta đã biết vào Facebook ngiu up ảnh, mốc kỷ niệm không bao giờ quên được',
        'Nàng ta đâu biết ngiu nàng ta quàng 2 tuần mà không nỡ giặt🌚',
        'Video điệu nhất quả đất🤣',
        'Tặng bé nhân ngày 20/11🤣😂',
        'Hình ảnh ai đấy quàng khăn 2 tuần mà không muốn giặt🌚',
        'Cô ta uống say mà bao biện không say😒'
        ],
    'Tháng 12':[
        'Khoe cơ bắp với nàng ta mà nàng ta bảo mình không có 6 múi😒',
        'Chết mê chết mệt với nàng ta',
        'Nhìn mà muốn cắn cho cái',
        'Đây chắc chắn là tổng kết năm mà anh dành nhiều tâm huyết nhất. Trong những năm trước toàn làm video, nhưng năm nay lại chọn cách sáng tạo hơn với một trang web. Kết thúc năm 2024 thật đẹp đẽ khi có em bên cạnh, chúc năm 2025 sẽ thật nhẹ nhàng với em và yêu anh nhiều hơn. Yêu em nhiều lắmm❤️🎉',
    ]
};

function openAlbum(month) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = '';

    if (albums[month].length !== titles[month].length) {
        console.error("Số lượng ảnh và tiêu đề không khớp!");
        return;
    }

    albums[month].forEach((url, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const img = document.createElement('img');
        img.src = url;
        img.alt = titles[month][index];

        const titleDisplay = document.createElement('div');
        titleDisplay.textContent = titles[month][index];
        titleDisplay.classList.add('image-title');
        
        container.appendChild(img);
        container.appendChild(titleDisplay);
        modalContent.appendChild(container);
    });

    modal.style.display = "flex";
    setTimeout(() => { modal.style.opacity = 1; }, 0);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Đóng modal khi nhấp ra ngoài
window.addEventListener('wheel', (event) => {
    if (event.deltaX !== 0) {
        event.preventDefault();
    }
});
