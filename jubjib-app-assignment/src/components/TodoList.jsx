import React from 'react';

const TodoList = () => {

    const todos = [
        { id: 1, text: 'วันนี้วันไหนยังไงก็เธอ The First Frost', completed: false },
        { id: 2, text: 'เหนือสมรภูมิ Legend of the Female General', completed: true },
        { id: 3, text: "บันทึกหิมะแห่งรุ่งอรุณ Coroner's Diary", completed: true },
        { id: 4, text: 'ตำนานรักสวรรค์จันทรา Moonlight Mystique', completed: false },
        { id: 5, text: 'จันทราอัสดง Till The End of The Moon', completed: false },
        { id: 6, text: 'แอบรักให้เธอรู้ Hidden Love', completed: true },
        { id: 7, text: 'ดาราจักรรักลำนำใจ Love Like The Galaxy', completed: true },
        { id: 8, text: 'ร้อยรักปักดวงใจ The sword and The brocade', completed: true },
        { id: 9, text: 'เล่ห์รักวังคุนหนิง Story of Kunning Palace', completed: false },
        { id: 10, text: 'ครึ่งทางรัก Love Is Sweet', completed: true }
    ];
    
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ color: '#3E5F44',maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>🎬 Series List ✨</h3>
            
            <div style={{
                backgroundColor: '#0A400C',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#A3DC9A',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: '#0A400C',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#5E936C' : '#3E5F44'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #004030, #4A9782)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;