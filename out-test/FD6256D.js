goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15255__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15256__i = 0, G__15256__a = new Array(arguments.length -  0);
while (G__15256__i < G__15256__a.length) {G__15256__a[G__15256__i] = arguments[G__15256__i + 0]; ++G__15256__i;}
  args = new cljs.core.IndexedSeq(G__15256__a,0);
} 
return G__15255__delegate.call(this,args);};
G__15255.cljs$lang$maxFixedArity = 0;
G__15255.cljs$lang$applyTo = (function (arglist__15257){
var args = cljs.core.seq(arglist__15257);
return G__15255__delegate(args);
});
G__15255.cljs$core$IFn$_invoke$arity$variadic = G__15255__delegate;
return G__15255;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15258__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15259__i = 0, G__15259__a = new Array(arguments.length -  0);
while (G__15259__i < G__15259__a.length) {G__15259__a[G__15259__i] = arguments[G__15259__i + 0]; ++G__15259__i;}
  args = new cljs.core.IndexedSeq(G__15259__a,0);
} 
return G__15258__delegate.call(this,args);};
G__15258.cljs$lang$maxFixedArity = 0;
G__15258.cljs$lang$applyTo = (function (arglist__15260){
var args = cljs.core.seq(arglist__15260);
return G__15258__delegate(args);
});
G__15258.cljs$core$IFn$_invoke$arity$variadic = G__15258__delegate;
return G__15258;
})()
;

return null;
});
