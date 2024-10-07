import {} from 'react'

export function Elonyok() {

   return (
        <>
           <section className="mb-5">
        <h2>Az Autodidakta Tanulás Előnyei</h2>
        <table className="table table-bordered">
            <thead className="table-primary">
                <tr>
                    <th>#</th>
                    <th>Előny</th>
                    <th>Leírás</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Rugalmasság</td>
                    <td>Az autodidakta tanulás lehetővé teszi a saját időbeosztás kialakítását.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Önállóság</td>
                    <td>Fejleszti az önálló döntéshozatalt és problémamegoldást.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Kreativitás</td>
                    <td>Bátorítja a kreatív gondolkodást és az új ötletek kipróbálását.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Önfejlesztés</td>
                    <td>Folyamatosan bővíthető tudás és új készségek elsajátítása.</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Költséghatékonyság</td>
                    <td>Nem igényel drága tanfolyamokat, egyéni tanulási anyagokat használhat.</td>
                </tr>
            </tbody>
        </table>
    </section>
        </>
    )
}

export default Elonyok