goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__122318__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__122318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__122319__i = 0, G__122319__a = new Array(arguments.length -  0);
while (G__122319__i < G__122319__a.length) {G__122319__a[G__122319__i] = arguments[G__122319__i + 0]; ++G__122319__i;}
  args = new cljs.core.IndexedSeq(G__122319__a,0);
} 
return G__122318__delegate.call(this,args);};
G__122318.cljs$lang$maxFixedArity = 0;
G__122318.cljs$lang$applyTo = (function (arglist__122320){
var args = cljs.core.seq(arglist__122320);
return G__122318__delegate(args);
});
G__122318.cljs$core$IFn$_invoke$arity$variadic = G__122318__delegate;
return G__122318;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__122321__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__122321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__122322__i = 0, G__122322__a = new Array(arguments.length -  0);
while (G__122322__i < G__122322__a.length) {G__122322__a[G__122322__i] = arguments[G__122322__i + 0]; ++G__122322__i;}
  args = new cljs.core.IndexedSeq(G__122322__a,0);
} 
return G__122321__delegate.call(this,args);};
G__122321.cljs$lang$maxFixedArity = 0;
G__122321.cljs$lang$applyTo = (function (arglist__122323){
var args = cljs.core.seq(arglist__122323);
return G__122321__delegate(args);
});
G__122321.cljs$core$IFn$_invoke$arity$variadic = G__122321__delegate;
return G__122321;
})()
;

return null;
});
