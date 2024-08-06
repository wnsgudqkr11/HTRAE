function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var fullAddr = ''; // 최종 주소 변수
            var extraAddr = ''; // 조합형 주소 변수

            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                fullAddr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                fullAddr = data.jibunAddress;
            }

            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                fullAddr += extraAddr;
            }

            document.getElementById('postal_code').value = data.zonecode;
            document.getElementById('address').value = fullAddr;
        }
    }).open();
}

// 동의 칸
document.getElementById('agree_all').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.individual');
    checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});

const individualCheckboxes = document.querySelectorAll('.individual');
individualCheckboxes.forEach(checkbox => checkbox.addEventListener('change', function() {
    const allChecked = Array.from(individualCheckboxes).every(cb => cb.checked);
    document.getElementById('agree_all').checked = allChecked;
}));
