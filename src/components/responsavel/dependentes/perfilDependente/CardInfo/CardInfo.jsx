import styles from "./CardInfo.module.css"
import icoEditar from "../../../../../utils/assets/dependentes/lapis.png"
import icoConfirmar from "../../../../../utils/assets/perfil/done.png"
import icoCancelar from "../../../../../utils/assets/perfil/excluir.png"
import { useEffect, useState } from "react";
import api from "../../../../../api";

const CardInfo = ({ idDependente = null, icone, categoria, info, editar = false, tipo = "text", opcoes = null }) => {
    const [inputValue, setInputValue] = useState(String(info));
    const [valorInicial, setValorInicial] = useState(String(info));
    const [iconeEditar, setIconeEditar] = useState(icoEditar);
    const [modoEdicao, setModoEdicao] = useState(false);

    useEffect(() => {
        setInputValue(String(info));
        setValorInicial(String(info));
    }, [info]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const habilitarModoEditar = () => {
        setModoEdicao(true);
        setIconeEditar(icoConfirmar); // Alterna para o ícone de confirmar
        const input = document.getElementById(`info-editar-${String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, '')}`);
        setValorInicial(input.value);
        input.disabled = false;
        input.focus();
    };

    const confirmarEdicao = () => {
        setModoEdicao(false);
        setIconeEditar(icoEditar); // Volta para o ícone de editar
        const input = document.getElementById(`info-editar-${String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, '')}`);
        input.disabled = true;

        api.patch(`/dependentes/${idDependente}/perfil/atualizar-${String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, '')}`, {
            "id": idDependente,
            "campo": String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, ''),
            "alteracao": inputValue
        })
            .then((res) => {
                const data = res.data;
                console.log(data);
            })
            .catch(err => console.error(err));

    };

    const cancelarEdicao = () => {
        setInputValue(valorInicial); // Restaura o valor inicial
        setModoEdicao(false);
        setIconeEditar(icoEditar); // Volta para o ícone de editar
        const input = document.getElementById(`info-editar-${String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, '')}`);
        input.disabled = true;
    };

    const renderInputField = () => {
        // Renderiza o select se houver opções, caso contrário, renderiza o input
        if (opcoes) {
            return (
                <select
                    id={`info-editar-${String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, '')}`}
                    className={styles['info-editar']}
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled
                >
                    {opcoes.map((opcao) => (
                        <option key={opcao.id} value={opcao.value}>
                            {opcao.value}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                id={`info-editar-${String(categoria.slice(0, categoria.length - 1)).replace('é', 'e').toLocaleLowerCase().replace(/\s+/g, '')}`}
                className={styles['info-editar']}
                value={inputValue}
                onChange={handleInputChange}
                type={tipo}
                disabled
            />
        );
    };

    return (

        <div className={styles['card']}>
            <div className={styles['icone']}>
                <img className={styles['icone-img']} src={icone} alt="ico" />
            </div>
            <div className={styles['content']}>
                <span className={styles['categoria']}>{categoria}</span>
                <div style={{ width: 100 + "%" }}>
                    {editar ?
                        <div className={styles['campo-editar']}>
                            {renderInputField()}
                            {modoEdicao ? (
                                <div className={styles['confirmar-cancelar']}>
                                    <img
                                        className={styles["img-editar"]}
                                        src={icoConfirmar}
                                        onClick={confirmarEdicao}
                                        alt="Confirmar"
                                    />
                                    <img
                                        className={styles["img-editar"]}
                                        src={icoCancelar}
                                        onClick={cancelarEdicao}
                                        alt="Cancelar"
                                    />
                                </div>
                            ) : (
                                <img
                                    className={styles["img-editar"]}
                                    src={iconeEditar}
                                    onClick={habilitarModoEditar}
                                    alt="Editar"
                                />
                            )}
                        </div>

                        :
                        <span className={styles['info']}>{info}</span>

                    }
                </div>
            </div>
        </div>


    )
}

export default CardInfo