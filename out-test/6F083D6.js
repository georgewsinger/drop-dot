goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56705__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56706__i = 0, G__56706__a = new Array(arguments.length -  0);
while (G__56706__i < G__56706__a.length) {G__56706__a[G__56706__i] = arguments[G__56706__i + 0]; ++G__56706__i;}
  args = new cljs.core.IndexedSeq(G__56706__a,0);
} 
return G__56705__delegate.call(this,args);};
G__56705.cljs$lang$maxFixedArity = 0;
G__56705.cljs$lang$applyTo = (function (arglist__56707){
var args = cljs.core.seq(arglist__56707);
return G__56705__delegate(args);
});
G__56705.cljs$core$IFn$_invoke$arity$variadic = G__56705__delegate;
return G__56705;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56708__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56709__i = 0, G__56709__a = new Array(arguments.length -  0);
while (G__56709__i < G__56709__a.length) {G__56709__a[G__56709__i] = arguments[G__56709__i + 0]; ++G__56709__i;}
  args = new cljs.core.IndexedSeq(G__56709__a,0);
} 
return G__56708__delegate.call(this,args);};
G__56708.cljs$lang$maxFixedArity = 0;
G__56708.cljs$lang$applyTo = (function (arglist__56710){
var args = cljs.core.seq(arglist__56710);
return G__56708__delegate(args);
});
G__56708.cljs$core$IFn$_invoke$arity$variadic = G__56708__delegate;
return G__56708;
})()
;

return null;
});
