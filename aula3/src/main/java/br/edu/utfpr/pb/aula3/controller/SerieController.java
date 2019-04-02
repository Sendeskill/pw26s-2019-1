package br.edu.utfpr.pb.aula3.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.aula3.model.Serie;
import br.edu.utfpr.pb.aula3.service.CrudService;
import br.edu.utfpr.pb.aula3.service.SerieService;

@RestController
@RequestMapping("serie")
public class SerieController extends CrudController<Serie, Long>{

	@Autowired
	private SerieService serieService;
	
	@Override
	@Valid
	protected CrudService<Serie, Long> getService() {
		return serieService;
	}

}
