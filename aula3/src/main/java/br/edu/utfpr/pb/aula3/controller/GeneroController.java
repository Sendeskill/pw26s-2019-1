package br.edu.utfpr.pb.aula3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.pb.aula3.model.Genero;
import br.edu.utfpr.pb.aula3.service.GeneroService;

@RestController
@RequestMapping("genero")
public class GeneroController {
	
	@Autowired
	private GeneroService generoService;
	
	@GetMapping
	@ResponseBody
	public List<Genero> findAll(){
		return generoService.findAll();
	}
	
	@GetMapping("{id}")
	public Genero findOne(@PathVariable Integer id) {
		return generoService.findOne(id);
	}
	
}
