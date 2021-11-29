const stateDefult = {
    yourChoosing: './img/bua.png',
    ketQua: {
        soBanThang: 0,
        soBanChoi: 0
    },
    computerChoosing: './img/bua.png'

}
export const gamePlay = (state = stateDefult, action) => {
    switch (action.type) {
        case 'chon':
            state.yourChoosing = action.luaChon
            state.computerChoosing = './img/nochoose.png'
            console.log(state.computerChoosing);
            return { ...state }
        case 'play':
            let arrayChoosing = ['bua', 'bao', 'keo'];
            let soBanThang = 0;
            let choose = arrayChoosing[Math.floor(Math.random() * 3)]; //0 - 1 - 2
            //computer Choose
            state.computerChoosing = `./img/${choose}.png`;
            if (state.yourChoosing === './img/bua.png') {
                if (choose === 'keo') soBanThang = 1;
            } else if (state.yourChoosing === './img/keo.png') {
                if (choose === 'bao') soBanThang = 1;
            } else {
                if (choose === 'bua') soBanThang = 1;
            }
            state.ketQua.soBanThang += soBanThang
            state.ketQua.soBanChoi += 1;
            let ketQuaUpdate = { ...state.ketQua };
            state.ketQua = ketQuaUpdate
            return { ...state }
        default: return state
    }
}