const { actionQuery } = require('../helpers/actionQuery')

const couponsModels = {
    getCoupons: () => {
        return actionQuery(`SELECT * FROM coupons`)
    },
    getCouponById: (couponCode) => {
        return actionQuery('SELECT * FROM coupons WHERE couponCode = ?', couponCode)
    },
    insertCoupons: (data) => {
        return actionQuery('INSERT INTO coupons SET ?', data)
    },
    deleteCoupons: (couponCode) => {
        return actionQuery('DELETE FROM coupons WHERE couponCode = ?', couponCode)
    },
    updateCoupons: (couponCode, data) => {
        return actionQuery(`UPDATE coupons SET itemToBuy = '${data.itemToBuy}', amountItemToBuy = '${data.amountItemToBuy}', itemPromo = '${data.itemPromo}', percentDiscount = '${data.percentDiscount}', expired = '${data.expired}' WHERE couponCode = ?`, couponCode)
    }
}

module.exports = couponsModels