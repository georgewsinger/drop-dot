goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__84893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__84893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84894__i = 0, G__84894__a = new Array(arguments.length -  0);
while (G__84894__i < G__84894__a.length) {G__84894__a[G__84894__i] = arguments[G__84894__i + 0]; ++G__84894__i;}
  args = new cljs.core.IndexedSeq(G__84894__a,0);
} 
return G__84893__delegate.call(this,args);};
G__84893.cljs$lang$maxFixedArity = 0;
G__84893.cljs$lang$applyTo = (function (arglist__84895){
var args = cljs.core.seq(arglist__84895);
return G__84893__delegate(args);
});
G__84893.cljs$core$IFn$_invoke$arity$variadic = G__84893__delegate;
return G__84893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__84896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__84896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84897__i = 0, G__84897__a = new Array(arguments.length -  0);
while (G__84897__i < G__84897__a.length) {G__84897__a[G__84897__i] = arguments[G__84897__i + 0]; ++G__84897__i;}
  args = new cljs.core.IndexedSeq(G__84897__a,0);
} 
return G__84896__delegate.call(this,args);};
G__84896.cljs$lang$maxFixedArity = 0;
G__84896.cljs$lang$applyTo = (function (arglist__84898){
var args = cljs.core.seq(arglist__84898);
return G__84896__delegate(args);
});
G__84896.cljs$core$IFn$_invoke$arity$variadic = G__84896__delegate;
return G__84896;
})()
;

return null;
});
