goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24805__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24806__i = 0, G__24806__a = new Array(arguments.length -  0);
while (G__24806__i < G__24806__a.length) {G__24806__a[G__24806__i] = arguments[G__24806__i + 0]; ++G__24806__i;}
  args = new cljs.core.IndexedSeq(G__24806__a,0);
} 
return G__24805__delegate.call(this,args);};
G__24805.cljs$lang$maxFixedArity = 0;
G__24805.cljs$lang$applyTo = (function (arglist__24807){
var args = cljs.core.seq(arglist__24807);
return G__24805__delegate(args);
});
G__24805.cljs$core$IFn$_invoke$arity$variadic = G__24805__delegate;
return G__24805;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24808__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24809__i = 0, G__24809__a = new Array(arguments.length -  0);
while (G__24809__i < G__24809__a.length) {G__24809__a[G__24809__i] = arguments[G__24809__i + 0]; ++G__24809__i;}
  args = new cljs.core.IndexedSeq(G__24809__a,0);
} 
return G__24808__delegate.call(this,args);};
G__24808.cljs$lang$maxFixedArity = 0;
G__24808.cljs$lang$applyTo = (function (arglist__24810){
var args = cljs.core.seq(arglist__24810);
return G__24808__delegate(args);
});
G__24808.cljs$core$IFn$_invoke$arity$variadic = G__24808__delegate;
return G__24808;
})()
;

return null;
});
