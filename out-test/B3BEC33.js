goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__173706__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__173706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173707__i = 0, G__173707__a = new Array(arguments.length -  0);
while (G__173707__i < G__173707__a.length) {G__173707__a[G__173707__i] = arguments[G__173707__i + 0]; ++G__173707__i;}
  args = new cljs.core.IndexedSeq(G__173707__a,0);
} 
return G__173706__delegate.call(this,args);};
G__173706.cljs$lang$maxFixedArity = 0;
G__173706.cljs$lang$applyTo = (function (arglist__173708){
var args = cljs.core.seq(arglist__173708);
return G__173706__delegate(args);
});
G__173706.cljs$core$IFn$_invoke$arity$variadic = G__173706__delegate;
return G__173706;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__173709__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__173709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__173710__i = 0, G__173710__a = new Array(arguments.length -  0);
while (G__173710__i < G__173710__a.length) {G__173710__a[G__173710__i] = arguments[G__173710__i + 0]; ++G__173710__i;}
  args = new cljs.core.IndexedSeq(G__173710__a,0);
} 
return G__173709__delegate.call(this,args);};
G__173709.cljs$lang$maxFixedArity = 0;
G__173709.cljs$lang$applyTo = (function (arglist__173711){
var args = cljs.core.seq(arglist__173711);
return G__173709__delegate(args);
});
G__173709.cljs$core$IFn$_invoke$arity$variadic = G__173709__delegate;
return G__173709;
})()
;

return null;
});
