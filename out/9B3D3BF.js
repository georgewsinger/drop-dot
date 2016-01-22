goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34432__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34433__i = 0, G__34433__a = new Array(arguments.length -  0);
while (G__34433__i < G__34433__a.length) {G__34433__a[G__34433__i] = arguments[G__34433__i + 0]; ++G__34433__i;}
  args = new cljs.core.IndexedSeq(G__34433__a,0);
} 
return G__34432__delegate.call(this,args);};
G__34432.cljs$lang$maxFixedArity = 0;
G__34432.cljs$lang$applyTo = (function (arglist__34434){
var args = cljs.core.seq(arglist__34434);
return G__34432__delegate(args);
});
G__34432.cljs$core$IFn$_invoke$arity$variadic = G__34432__delegate;
return G__34432;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34435__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34436__i = 0, G__34436__a = new Array(arguments.length -  0);
while (G__34436__i < G__34436__a.length) {G__34436__a[G__34436__i] = arguments[G__34436__i + 0]; ++G__34436__i;}
  args = new cljs.core.IndexedSeq(G__34436__a,0);
} 
return G__34435__delegate.call(this,args);};
G__34435.cljs$lang$maxFixedArity = 0;
G__34435.cljs$lang$applyTo = (function (arglist__34437){
var args = cljs.core.seq(arglist__34437);
return G__34435__delegate(args);
});
G__34435.cljs$core$IFn$_invoke$arity$variadic = G__34435__delegate;
return G__34435;
})()
;

return null;
});
