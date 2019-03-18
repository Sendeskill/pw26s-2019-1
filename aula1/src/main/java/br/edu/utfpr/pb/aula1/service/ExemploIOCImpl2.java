package br.edu.utfpr.pb.aula1.service;

import org.springframework.stereotype.Service;

@Service("exemplo2")
public class ExemploIOCImpl2 implements IExemploIOC{

	@Override
	public String getMensagem() {
		return "Retorno do exemplo2 ! ###";
	}

}
