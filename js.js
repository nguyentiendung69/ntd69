const DK = document.querySelector('.showDK')
const Modal = document.querySelector('.modalheader')
const Close = document.querySelector('.close')
function showdK(){
    Modal.classList.add('open')
}
function closeDK(){
    Modal.classList.remove('open')
}
DK.addEventListener('click', showdK)
Close.addEventListener('click', closeDK)
    //    end dk
    const DN = document.querySelector('.showDN')
    const Modal1 = document.querySelector('.modalheader1')
    const Close1 = document.querySelector('.close1')
    function showdn(){
        Modal1.classList.add('open')
    }
    function closeDN(){
        Modal1.classList.remove('open')
    }
    DN.addEventListener('click', showdn)
    Close1.addEventListener('click', closeDN)
                    // end dn