package br.edu.utfpr.pb.aula2.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "produto")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Data
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 100)
	private String nome;
	
	@Column(length = 512)
	private String descricao;
	
	private Double valor;
	
	@ManyToOne
	@JoinColumn(name = "categoria_id", 
			referencedColumnName = "id")
	private Categoria categoria;
	
	@Column(name = "data_lancamento", nullable = false)
	private LocalDate dataLancamento;
}
