package digitalcandy

import grails.rest.Resource

@Resource(uri='/roles', formats=['json', 'xml'])
class Role {

	String authority

	static mapping = {
		cache true
	}

	static constraints = {
		authority blank: false, unique: true
	}
}
