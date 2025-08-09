import { Element } from 'react-scroll';

const memberNames = [
  'Wang Xiaolong', 'Yu Yingzhe', 'Qin Xi', 'Mao Jianda', 'Zheng Lifang', 'Fan Wenkai', 
  'Chen Lizhong', 'Zhao Zhenyu', 'Yang Tiantao', 'Chan Tsz Wai', 'Yang Haowei', 'Xie Zijun', 
  'Shen Lue', 'Yang Hanquan', 'Zen Lingfei', 'Lin Yuean', 'Chen Xingze', 'Hui Tin', 
  'Wen Yizhou', 'Wang Xianfei', 'Xie Peng', 'Zhang Shurui', 'Chen Xingyan', 'Meng Zibin', 
  'Bi Junquan', 'Shang Zhenhang'
];

function Members() {
  return (
    <div className="text-center py-12 bg-section-bg">
      <div data-aos="fade-down">
        <h2 className="text-3xl font-bold mb-8 text-heading-color">Members</h2>
      </div>

      <div data-aos="fade-up" className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {memberNames.map((name, index) => (
            <div key={index} className="px-4 py-2 bg-gray-100 rounded-md">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;