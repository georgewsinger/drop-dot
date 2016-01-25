goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15279__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15280__i = 0, G__15280__a = new Array(arguments.length -  0);
while (G__15280__i < G__15280__a.length) {G__15280__a[G__15280__i] = arguments[G__15280__i + 0]; ++G__15280__i;}
  args = new cljs.core.IndexedSeq(G__15280__a,0);
} 
return G__15279__delegate.call(this,args);};
G__15279.cljs$lang$maxFixedArity = 0;
G__15279.cljs$lang$applyTo = (function (arglist__15281){
var args = cljs.core.seq(arglist__15281);
return G__15279__delegate(args);
});
G__15279.cljs$core$IFn$_invoke$arity$variadic = G__15279__delegate;
return G__15279;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15282__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15283__i = 0, G__15283__a = new Array(arguments.length -  0);
while (G__15283__i < G__15283__a.length) {G__15283__a[G__15283__i] = arguments[G__15283__i + 0]; ++G__15283__i;}
  args = new cljs.core.IndexedSeq(G__15283__a,0);
} 
return G__15282__delegate.call(this,args);};
G__15282.cljs$lang$maxFixedArity = 0;
G__15282.cljs$lang$applyTo = (function (arglist__15284){
var args = cljs.core.seq(arglist__15284);
return G__15282__delegate(args);
});
G__15282.cljs$core$IFn$_invoke$arity$variadic = G__15282__delegate;
return G__15282;
})()
;

return null;
});
