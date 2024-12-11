export const Powerlifting = () => (
    <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">פאוורליפטינג</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">אימוני פאוורליפטינג אישיים</h3>
                <ul className="space-y-3 mb-6">
                    <li>• תוכנית אימונים מותאמת אישית לפאוורליפטינג</li>
                    <li>• שיפור טכניקה בתרגילי הליבה - סקוואט, דדליפט ובנץ׳</li>
                    <li>• תוכנית תזונה ייעודית לספורטאי כוח</li>
                    <li>• הכנה לתחרויות</li>
                </ul>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full">
                    לפרטים נוספים
                </button>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">אימוני קבוצות פאוורליפטינג</h3>
                <ul className="space-y-3 mb-6">
                    <li>• אימונים בקבוצות קטנות</li>
                    <li>• אווירה תחרותית ותומכת</li>
                    <li>• למידה הדדית וחיזוק מוטיבציה</li>
                    <li>• מחיר משתלם לאימונים איכותיים</li>
                </ul>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full">
                    לפרטים נוספים
                </button>
            </div>
        </div>
    </div>
);
