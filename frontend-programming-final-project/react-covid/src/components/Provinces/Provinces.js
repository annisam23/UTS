/* eslint-disable jsx-a11y/heading-has-content */
import Provinsi from "../Provinsi/Provinsi";
import styles from "./Provinces.module.css"

const Provinces = (props) => {
    const {tableData} = props;
    return(
        <div className={styles.container}>
            <section className={styles.provinces}>
                <h2 className={styles.provinces_title}>Provinsi</h2>
                <h4 className={styles.provinces_desc}>Data Covid Berdasarkan Provinsi</h4>
            <div className={styles.provinces_container}>
            <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kota</th>
                        <th>Kasus</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>    
                {
                    tableData.map((prov,index) => (
                        <Provinsi key={prov.kota} prov={prov} index={index}/>
                    )
                )
                }
                </tbody>
                </table>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Provinces;