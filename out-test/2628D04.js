goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__152008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__152008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152009__i = 0, G__152009__a = new Array(arguments.length -  0);
while (G__152009__i < G__152009__a.length) {G__152009__a[G__152009__i] = arguments[G__152009__i + 0]; ++G__152009__i;}
  args = new cljs.core.IndexedSeq(G__152009__a,0);
} 
return G__152008__delegate.call(this,args);};
G__152008.cljs$lang$maxFixedArity = 0;
G__152008.cljs$lang$applyTo = (function (arglist__152010){
var args = cljs.core.seq(arglist__152010);
return G__152008__delegate(args);
});
G__152008.cljs$core$IFn$_invoke$arity$variadic = G__152008__delegate;
return G__152008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__152011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__152011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__152012__i = 0, G__152012__a = new Array(arguments.length -  0);
while (G__152012__i < G__152012__a.length) {G__152012__a[G__152012__i] = arguments[G__152012__i + 0]; ++G__152012__i;}
  args = new cljs.core.IndexedSeq(G__152012__a,0);
} 
return G__152011__delegate.call(this,args);};
G__152011.cljs$lang$maxFixedArity = 0;
G__152011.cljs$lang$applyTo = (function (arglist__152013){
var args = cljs.core.seq(arglist__152013);
return G__152011__delegate(args);
});
G__152011.cljs$core$IFn$_invoke$arity$variadic = G__152011__delegate;
return G__152011;
})()
;

return null;
});
