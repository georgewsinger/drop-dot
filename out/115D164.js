goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23495__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23496__i = 0, G__23496__a = new Array(arguments.length -  0);
while (G__23496__i < G__23496__a.length) {G__23496__a[G__23496__i] = arguments[G__23496__i + 0]; ++G__23496__i;}
  args = new cljs.core.IndexedSeq(G__23496__a,0);
} 
return G__23495__delegate.call(this,args);};
G__23495.cljs$lang$maxFixedArity = 0;
G__23495.cljs$lang$applyTo = (function (arglist__23497){
var args = cljs.core.seq(arglist__23497);
return G__23495__delegate(args);
});
G__23495.cljs$core$IFn$_invoke$arity$variadic = G__23495__delegate;
return G__23495;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23498__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23499__i = 0, G__23499__a = new Array(arguments.length -  0);
while (G__23499__i < G__23499__a.length) {G__23499__a[G__23499__i] = arguments[G__23499__i + 0]; ++G__23499__i;}
  args = new cljs.core.IndexedSeq(G__23499__a,0);
} 
return G__23498__delegate.call(this,args);};
G__23498.cljs$lang$maxFixedArity = 0;
G__23498.cljs$lang$applyTo = (function (arglist__23500){
var args = cljs.core.seq(arglist__23500);
return G__23498__delegate(args);
});
G__23498.cljs$core$IFn$_invoke$arity$variadic = G__23498__delegate;
return G__23498;
})()
;

return null;
});
