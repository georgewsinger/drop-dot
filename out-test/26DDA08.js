goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68765__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68766__i = 0, G__68766__a = new Array(arguments.length -  0);
while (G__68766__i < G__68766__a.length) {G__68766__a[G__68766__i] = arguments[G__68766__i + 0]; ++G__68766__i;}
  args = new cljs.core.IndexedSeq(G__68766__a,0);
} 
return G__68765__delegate.call(this,args);};
G__68765.cljs$lang$maxFixedArity = 0;
G__68765.cljs$lang$applyTo = (function (arglist__68767){
var args = cljs.core.seq(arglist__68767);
return G__68765__delegate(args);
});
G__68765.cljs$core$IFn$_invoke$arity$variadic = G__68765__delegate;
return G__68765;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68768__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68769__i = 0, G__68769__a = new Array(arguments.length -  0);
while (G__68769__i < G__68769__a.length) {G__68769__a[G__68769__i] = arguments[G__68769__i + 0]; ++G__68769__i;}
  args = new cljs.core.IndexedSeq(G__68769__a,0);
} 
return G__68768__delegate.call(this,args);};
G__68768.cljs$lang$maxFixedArity = 0;
G__68768.cljs$lang$applyTo = (function (arglist__68770){
var args = cljs.core.seq(arglist__68770);
return G__68768__delegate(args);
});
G__68768.cljs$core$IFn$_invoke$arity$variadic = G__68768__delegate;
return G__68768;
})()
;

return null;
});
