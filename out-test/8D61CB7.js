goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40496__i = 0, G__40496__a = new Array(arguments.length -  0);
while (G__40496__i < G__40496__a.length) {G__40496__a[G__40496__i] = arguments[G__40496__i + 0]; ++G__40496__i;}
  args = new cljs.core.IndexedSeq(G__40496__a,0);
} 
return G__40495__delegate.call(this,args);};
G__40495.cljs$lang$maxFixedArity = 0;
G__40495.cljs$lang$applyTo = (function (arglist__40497){
var args = cljs.core.seq(arglist__40497);
return G__40495__delegate(args);
});
G__40495.cljs$core$IFn$_invoke$arity$variadic = G__40495__delegate;
return G__40495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40499__i = 0, G__40499__a = new Array(arguments.length -  0);
while (G__40499__i < G__40499__a.length) {G__40499__a[G__40499__i] = arguments[G__40499__i + 0]; ++G__40499__i;}
  args = new cljs.core.IndexedSeq(G__40499__a,0);
} 
return G__40498__delegate.call(this,args);};
G__40498.cljs$lang$maxFixedArity = 0;
G__40498.cljs$lang$applyTo = (function (arglist__40500){
var args = cljs.core.seq(arglist__40500);
return G__40498__delegate(args);
});
G__40498.cljs$core$IFn$_invoke$arity$variadic = G__40498__delegate;
return G__40498;
})()
;

return null;
});
