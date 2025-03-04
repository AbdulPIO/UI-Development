const grade = 'A';

switch (grade) {
    case 'A':
        console.log('A grade');
        break;
    case 'B':
        console.log('B grade');
        break;
    case 'C':
        console.log('C grade');
        break;
    case 'D':
    case 'E':
        console.log('Fail');
        break;
    default:
        console.log('Invalid Grade');
}