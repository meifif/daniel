export const Programs = () => (
    <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">תוכניות אימון</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">אימונים אישיים 1:1</h3>
                <ul className="space-y-3 mb-6">
                    <li>• תוכנית אימונים אישית מותאמת</li>
                    <li>• ליווי תזונתי בסיסי</li>
                    <li>• מעקב התקדמות שבועי</li>
                    <li>• זמינות מלאה בוואטסאפ</li>
                </ul>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full">
                    לפרטים נוספים
                </button>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">אימוני זוגות וקבוצות קטנות</h3>
                <ul className="space-y-3 mb-6">
                    <li>• אימונים מותאמים לקבוצה</li>
                    <li>• אווירה תומכת ומהנה</li>
                    <li>• מחיר משתלם במיוחד</li>
                    <li>• גמישות בשעות האימון</li>
                </ul>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full">
                    לפרטים נוספים
                </button>
            </div>
        </div>
    </div>
);