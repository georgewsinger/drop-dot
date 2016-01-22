goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17894__i = 0, G__17894__a = new Array(arguments.length -  0);
while (G__17894__i < G__17894__a.length) {G__17894__a[G__17894__i] = arguments[G__17894__i + 0]; ++G__17894__i;}
  args = new cljs.core.IndexedSeq(G__17894__a,0);
} 
return G__17893__delegate.call(this,args);};
G__17893.cljs$lang$maxFixedArity = 0;
G__17893.cljs$lang$applyTo = (function (arglist__17895){
var args = cljs.core.seq(arglist__17895);
return G__17893__delegate(args);
});
G__17893.cljs$core$IFn$_invoke$arity$variadic = G__17893__delegate;
return G__17893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17897__i = 0, G__17897__a = new Array(arguments.length -  0);
while (G__17897__i < G__17897__a.length) {G__17897__a[G__17897__i] = arguments[G__17897__i + 0]; ++G__17897__i;}
  args = new cljs.core.IndexedSeq(G__17897__a,0);
} 
return G__17896__delegate.call(this,args);};
G__17896.cljs$lang$maxFixedArity = 0;
G__17896.cljs$lang$applyTo = (function (arglist__17898){
var args = cljs.core.seq(arglist__17898);
return G__17896__delegate(args);
});
G__17896.cljs$core$IFn$_invoke$arity$variadic = G__17896__delegate;
return G__17896;
})()
;

return null;
});
