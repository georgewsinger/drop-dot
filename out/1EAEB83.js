goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23138__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23139__i = 0, G__23139__a = new Array(arguments.length -  0);
while (G__23139__i < G__23139__a.length) {G__23139__a[G__23139__i] = arguments[G__23139__i + 0]; ++G__23139__i;}
  args = new cljs.core.IndexedSeq(G__23139__a,0);
} 
return G__23138__delegate.call(this,args);};
G__23138.cljs$lang$maxFixedArity = 0;
G__23138.cljs$lang$applyTo = (function (arglist__23140){
var args = cljs.core.seq(arglist__23140);
return G__23138__delegate(args);
});
G__23138.cljs$core$IFn$_invoke$arity$variadic = G__23138__delegate;
return G__23138;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23141__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23142__i = 0, G__23142__a = new Array(arguments.length -  0);
while (G__23142__i < G__23142__a.length) {G__23142__a[G__23142__i] = arguments[G__23142__i + 0]; ++G__23142__i;}
  args = new cljs.core.IndexedSeq(G__23142__a,0);
} 
return G__23141__delegate.call(this,args);};
G__23141.cljs$lang$maxFixedArity = 0;
G__23141.cljs$lang$applyTo = (function (arglist__23143){
var args = cljs.core.seq(arglist__23143);
return G__23141__delegate(args);
});
G__23141.cljs$core$IFn$_invoke$arity$variadic = G__23141__delegate;
return G__23141;
})()
;

return null;
});
