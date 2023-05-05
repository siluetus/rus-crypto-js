var oDn = {
    'CN': 'Иванов Иван',
    '2.5.4.4': 'Иванов',
    '2.5.4.42': 'Иван',
    '2.5.4.12': 'Директор департамента',
    '2.5.4.9': 'ул. Ивановская 99',
    '2.5.4.11': 'Отдел маркетинга',
    'O': 'ОАО "Серьезные люди"',
    '2.5.4.7': 'г. Москва', //L localityName нас пункт
    '2.5.4.8': '77 г. Москва', //S tateOrProvinceName регион
    'C': 'RU',
    '1.2.840.113549.1.9.1': 'example@domain.ru',
    '1.2.643.3.131.1.1': '000000000076', //'NUMERICSTRING:000000000076', //ИНН
    '1.2.643.100.1': '0000000000024', // 'NUMERICSTRING:0000000000024', // ОГРН
    '1.2.643.100.3': '00000000052', // 'NUMERICSTRING:00000000052' // СНИЛС
};
var inputPin = document.getElementById('pin');
var inputPin2 = document.getElementById('pin2');
var inputDescr = document.getElementById('descr');
var inputDN = document.getElementById('dn');
var inputCsr = document.getElementById('csr');
var inputCert = document.getElementById('cert');
var inputCertInfo = document.getElementById('certInfo');
var inputCertInfo3 = document.getElementById('certInfo3');
var inputCertInfo4 = document.getElementById('certInfo4');
var inputCertId = document.getElementById('certId');
var inputCertId2 = document.getElementById('certId2');
var inputCertId3 = document.getElementById('certId3');
var inputCertId4 = document.getElementById('certId4');
var inputSignHashCo = document.getElementById('signHashCo');
var inputHashCo = document.getElementById('hashCo');
var inputCoSignHash = document.getElementById('coSignHash');
var inputData = document.getElementById('data');
var inputAttached = document.getElementById('attached');
var inputData2 = document.getElementById('data2');
var inputSign = document.getElementById('sign');
var inputSignHash = document.getElementById('signedHash');
var inputSignHashRawSignature = document.getElementById('signHashWithRawSignature');
var inputHash = document.getElementById('inputHash');
var inputEncrypted = document.getElementById('encrypted');
var inputDecrypted = document.getElementById('decrypted');
var formCsr = document.getElementById('formCsr');
var formCert = document.getElementById('formCert');
var formSign = document.getElementById('formSign');
var formSignHash = document.getElementById('formSignHash');
var formSignSignedHash = document.getElementById('formSignSignedHash');
var formEncrypt = document.getElementById('formEncrypt');
var buttonRefresh = document.getElementById('refresh');
var buttonRefresh3 = document.getElementById('refresh3');
var buttonRefresh4 = document.getElementById('refresh4');
var inputAllInfo =  document.getElementById('allinfo');

inputDN.value = JSON.stringify(oDn, null, '\t');

buttonRefresh.addEventListener('click', e => {
    e.preventDefault();
    loadCerts();
});

buttonRefresh3.addEventListener('click', e => {
    console.log(e)
    e.preventDefault();
    loadCerts();
});

buttonRefresh4.addEventListener('click', e => {
    console.log(e)
    e.preventDefault();
    loadCerts();
});

inputCertId.addEventListener('change', e => {
    const contId = e.target.value;
    inputCertInfo.value = '';
    if(!contId) return;
    showInfo(contId, inputCertInfo);
});

inputCertId3.addEventListener('change', e => {
    const contId = e.target.value;
    inputCertInfo3.value = '';
    if(!contId) return;
    showInfo(contId, inputCertInfo3);
});

inputCertId4.addEventListener('change', e => {
    const contId = e.target.value;
    inputCertInfo4.value = '';
    if(!contId) return;
    showInfo(contId, inputCertInfo4);
});

formCsr.addEventListener('submit', e => {
    e.preventDefault();
    requestCSR();
});

formCert.addEventListener('submit', e => {
    e.preventDefault();
    requestCertificate();
});

formSign.addEventListener('submit', e => {
    e.preventDefault();
    signData();
});

formSignHash.addEventListener('submit', e => {
    e.preventDefault();
    signHash();
});

formSignSignedHash.addEventListener('submit', e => {
    e.preventDefault();
    coSignHash();
});

formEncrypt.addEventListener('submit', e => {
    e.preventDefault();
    encryptData();
});

function setCertOptions(certs) {
    inputCertId.innerHTML = '';
    inputCertId2.innerHTML = '';
    inputCertId3.innerHTML = '';
    inputCertId4.innerHTML = '';

    var options = [];
    var placeholder = document.createElement('option');
    placeholder.selected = true;
    placeholder.disabled = true;
    placeholder.text = 'Выберите сертификат';
    placeholder.value = '';
    options.push(placeholder);

    for(var i in certs) {
        var option = document.createElement('option');
        option.value = certs[i].id;
        option.text = certs[i].name;
        options.push(option);
    }
    for(var i in options) {
        inputCertId.appendChild(options[i]);
    }
    inputCertId2.innerHTML = inputCertId.innerHTML;
    inputCertId3.innerHTML = inputCertId.innerHTML;
    inputCertId4.innerHTML = inputCertId.innerHTML;
}
